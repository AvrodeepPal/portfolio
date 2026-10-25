import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/Footer";
import ChatBot from "./components/chatbot/ChatBot";
import { ThemeProvider } from "./components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-bg text-fg overflow-x-hidden">
        <Navbar />
        <ChatBot />
        <section id="home"> <Hero /> </section>
        <section id="experience"> <Experience /> </section>
        <section id="skills"> <Skills /> </section>
        <section id="projects"> <Projects /> </section>
        <section id="about"> <About /> </section>
        <section id="contact"> <Contact /> </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
