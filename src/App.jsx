import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FloatingSocialBar from "./components/FloatingSocialBar";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <FloatingSocialBar />
    </div>
  );
}