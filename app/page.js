'use client';

import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/Footer";
import ChatBot from "./components/chatbot/ChatBot";

export default function Home() {
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on refresh
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <div className="bg-bg text-fg overflow-x-hidden">
      <Navbar isDark={isDark} setDark={setDark} />
      <ChatBot />
      <section id="home"> <Hero isDark={isDark} /> </section>
      <section id="about"> <About isDark={isDark} /> </section>
      <section id="skills"> <Skills isDark={isDark} /> </section>
      <section id="projects"> <Projects isDark={isDark} /> </section>
      <section id="contact"> <Contact isDark={isDark} /> </section>
      <Footer isDark={isDark} />
    </div>
  );
}