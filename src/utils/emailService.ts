"use client";

import emailjs from "@emailjs/browser";
import { emailConfig } from "@/data/portfolioData";

let isInitialized = false;

const initEmailJS = () => {
    if (!isInitialized && emailConfig.publicKey) {
        try {
            emailjs.init({
                publicKey: emailConfig.publicKey,
                limitRate: { throttle: 10000 },
            });
            isInitialized = true;
        } catch (error) {
            console.error("EmailJS initialization failed:", error);
        }
    }
};

initEmailJS();

export const canSendMessage = (email: string) => {
    const lastSentKey = `last_sent_${email}`;
    const lastSentTime = localStorage.getItem(lastSentKey);
    if (!lastSentTime) return true;
    const now = new Date().getTime();
    const timeDiff = now - parseInt(lastSentTime);
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    return hoursDiff >= 24;
};

export const recordMessageSent = (email: string) => {
    const lastSentKey = `last_sent_${email}`;
    const now = new Date().getTime();
    localStorage.setItem(lastSentKey, now.toString());
};

export const getTimeUntilNextMessage = (email: string) => {
    const lastSentKey = `last_sent_${email}`;
    const lastSentTime = localStorage.getItem(lastSentKey);
    if (!lastSentTime) return null;
    const now = new Date().getTime();
    const timeDiff = now - parseInt(lastSentTime);
    const hoursRemaining = 24 - timeDiff / (1000 * 60 * 60);
    if (hoursRemaining <= 0) return null;
    const hours = Math.floor(hoursRemaining);
    const minutes = Math.floor((hoursRemaining - hours) * 60);
    return `${hours} hour${hours !== 1 ? "s" : ""} and ${minutes} minute${minutes !== 1 ? "s" : ""}`;
};

export const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = async (formData: FormData) => {
    const { name, email, subject, message } = formData;
    initEmailJS();

    if (!name || name.length < 2) throw new Error("Please enter a valid name (at least 2 characters).");
    if (!email || !isValidEmail(email)) throw new Error("Please enter a valid email address.");
    if (!subject || subject.length < 3) throw new Error("Please enter a subject (at least 3 characters).");
    if (!message || message.length < 10) throw new Error("Please enter a message (at least 10 characters).");

    if (!canSendMessage(email)) {
        const timeRemaining = getTimeUntilNextMessage(email);
        throw new Error(`You can send another message in ${timeRemaining}. Please wait before sending another message.`);
    }

    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
    });

    const notificationParams = {
        name, email, title: subject, message,
        from_name: name, from_email: email, subject,
        to_email: "sokkimheng168@gmail.com",
        reply_to: email, date: currentDate,
    };

    const autoReplyParams = {
        name, email, title: subject, message,
        to_name: name, to_email: email,
        from_name: "SOK KIMHENG", from_email: "sokkimheng168@gmail.com",
        subject, original_message: message, date: currentDate,
        reply_to: "sokkimheng168@gmail.com",
    };

    try {
        const notificationResponse = await emailjs.send(emailConfig.serviceId, emailConfig.templateId, notificationParams);
        if (emailConfig.autoReplyTemplateId && emailConfig.autoReplyTemplateId !== "template_autoreply") {
            try {
                await emailjs.send(emailConfig.serviceId, emailConfig.autoReplyTemplateId, autoReplyParams);
            } catch {
                console.warn("Auto-reply failed (non-critical)");
            }
        }
        recordMessageSent(email);
        return notificationResponse;
    } catch (error: unknown) {
        const err = error as { status?: number; text?: string };
        if (err.status === 400) throw new Error("Invalid request. Please check that all fields are filled correctly.");
        if (err.status === 401 || err.status === 403) throw new Error("EmailJS authentication failed.");
        if (err.status === 404) throw new Error("Email service not found.");
        if (err.status === 429) throw new Error("Too many requests. Please wait a moment and try again.");
        if (err.text) throw new Error(`Failed to send: ${err.text}`);
        throw new Error("Failed to send message. Please try again later.");
    }
};
