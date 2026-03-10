# Sok Kimheng — Portfolio (Next.js + Tailwind CSS)

A modern, fully responsive portfolio website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Features dark/light theme toggle, scroll animations, typewriter effect, skill bars, and a downloadable Cover Letter for HR.

---

## ✨ Features

- ⚡ **Next.js 14** (App Router)
- 🎨 **Tailwind CSS** with custom theme
- 🌙 **Dark / Light Mode** via `next-themes`
- 📱 **Fully Responsive** (mobile-first)
- 🔠 **Typewriter effect** in hero section
- 📊 **Animated skill bars** on scroll reveal
- 📄 **Cover Letter** — displayed on page + **PDF download** button for HR
- 🖱️ Smooth scroll navigation
- 💡 Glassmorphism UI cards
- 🎭 Scroll-triggered reveal animations
- 🦾 TypeScript throughout

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & ThemeProvider
│   ├── page.tsx            # Main page composing all sections
│   ├── providers.tsx       # next-themes ThemeProvider
│   └── globals.css         # Global styles, animations, print styles
├── components/
│   ├── Navbar.tsx          # Responsive navbar with theme toggle
│   ├── Hero.tsx            # Hero section with typewriter
│   ├── About.tsx           # About / skills overview
│   ├── Experience.tsx      # Timeline work experience
│   ├── Projects.tsx        # Project cards grid
│   ├── Skills.tsx          # Animated skill bars
│   ├── CoverLetter.tsx     # ⭐ Cover letter with PDF download
│   ├── Contact.tsx         # Contact form + social links
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 📄 Cover Letter (PDF Download)

The Cover Letter section:
- Displays a beautifully formatted letter on the page
- Has a **"Download as PDF"** button that opens a clean print dialog
- HR can select **"Save as PDF"** in the browser print dialog
- Prints with a professional letterhead (name, title, contact info)
- Styled with your brand orange accent color

To customize the cover letter content, edit the `coverLetterData` object at the top of `components/CoverLetter.tsx`.

---

## 🎨 Customization

### Personal Info
Update your details across:
- `components/Hero.tsx` — name, tagline, description
- `components/About.tsx` — bio paragraphs
- `components/Experience.tsx` — work history
- `components/Projects.tsx` — project cards
- `components/CoverLetter.tsx` — `coverLetterData` object
- `components/Contact.tsx` — email, social links
- `app/layout.tsx` — metadata (title, description)

### Theme Colors
Primary accent colors are defined in `tailwind.config.ts`:
- **AWS Orange**: `#FF9900`
- **Sky Blue**: `#0ea5e9`

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Theming | next-themes |
| Icons | lucide-react |
| Fonts | Outfit + JetBrains Mono (Google Fonts) |
| PDF Export | Browser Print API |

---

## 📦 Deploy

Deploy instantly to **Vercel**:

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com) for automatic deployments.

---

Built with ♥ by Sok Kimheng
