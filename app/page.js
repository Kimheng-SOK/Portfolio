"use client";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <div>
      <header id="home" className="min-h-80 bg-orange-300 text-black px-6 py-3">
            <div className="flex justify-evenly sm:justify-between items-center min-h-16 bg-white px-3 rounded-xl max-md:bg-red-500">
                <h2 className="text-2xl font-semibold sm:text-4xl">Portfolio</h2>
                <nav className="text-base space-x-1 sm:text-lg sm:space-x-8 md:hidden">
                    <a href="#home" className="Home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#skill">Skills</a>
                    <a href="#project">Project</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
            
            <div className="flex justify-evenly items-center">
                <section className="text-center py-20">
                <h1 className="text-5xl font-bold">Hi, I'm SOK KIMHENG</h1>
                <p className="text-xl mt-4">A Frontend Developer & Designer</p>
                </section>
                <img src="./photo.png" href="#" className="img h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] rounded-[50%] hover:shadow-2xl hover:shadow-blue-500"></img>
            </div>
        </header>

        <main className="min-h-screen bg-gray-900 text-white px-6">
            <section id="about" className="py-20">
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
                I am a passionate frontend developer specializing in building beautiful and responsive web applications using modern technologies like Next.js, Tailwind CSS, and React.
            </p>
            </section>

            <section id="project" className="py-20">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p className="text-gray-400">Description of the project.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p className="text-gray-400">Description of the project.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Project 3</h3>
                <p className="text-gray-400">Description of the project.</p>
                </div>
            </div>
            </section>

            <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold text-center">Contact</h2>
            <form className="max-w-lg mx-auto mt-6 bg-gray-800 p-6 rounded-lg">
                <input className="w-full p-3 mb-4 rounded bg-gray-700 text-white" type="text" placeholder="Your Name" required />
                <input className="w-full p-3 mb-4 rounded bg-gray-700 text-white" type="email" placeholder="Your Email" required />
                <textarea className="w-full p-3 mb-4 rounded bg-gray-700 text-white" placeholder="Your Message" rows="4" required></textarea>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Send Message</button>
            </form>
            </section>
        </main>
      </div>
    </div>
  );
}
