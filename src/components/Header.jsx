import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import { siteData } from "../config/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 30);

      // Scroll spy
      const sections = siteData.nav.map((n) => n.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (mobileOpen) {
      setMobileOpen(false);
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F5F0]/85 backdrop-blur-md border-b border-[#302824]/8 shadow-xs py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-4.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* Left: Brand Name - Fathima Asma */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center shrink-0 z-10"
          aria-label="Fathima Asma Portfolio"
        >
          <span className="font-serif text-2xl sm:text-[27px] font-bold tracking-tight text-[#302824]">
            Fathima Asma<span className="text-[#302824]">.</span>
          </span>
        </a>

        {/* Center: Shining Rounded Pill Navbar matching video background */}
        <nav className="hidden md:flex items-center">
          <div className="shining-nav-pill flex items-center gap-1 sm:gap-2 px-5 sm:px-7 py-2 sm:py-2.5">
            {siteData.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative rounded-full px-3.5 py-1 text-[14px] font-medium transition-all ${
                    isActive
                      ? "text-[#302824] font-bold bg-[#302824]/10 shadow-xs"
                      : "text-[#302824]/80 hover:text-[#302824] hover:bg-white/50"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right: Get in Touch Button (Others are same) */}
        <div className="flex items-center gap-3 shrink-0 z-10">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[14px] font-semibold text-[#302824] shadow-xs transition-all hover:bg-white hover:scale-[1.02] active:scale-95 border border-[#302824]/10"
          >
            <Send className="h-3.5 w-3.5 fill-[#302824] text-[#302824] -rotate-12" />
            <span>Get in Touch</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#302824] shadow-xs md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-[#302824]/10 bg-[#F8F5F0]/98 backdrop-blur-xl md:hidden"
          >
            <div className="px-6 py-4 space-y-2">
              <div className="shining-nav-pill rounded-3xl p-3 text-[#302824] space-y-1">
                {siteData.nav.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block rounded-2xl px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#302824]/15 text-[#302824] font-bold"
                          : "text-[#302824]/80 hover:bg-white/40 hover:text-[#302824]"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#302824] px-5 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  <Send className="h-3.5 w-3.5 fill-white" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}