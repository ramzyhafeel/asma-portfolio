import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail } from "lucide-react";
import { FaLinkedinIn, FaPhone, FaEnvelope } from "react-icons/fa6";
import { siteData } from "../config/siteData";

const socials = [
  {
    name: "Email",
    url: "mailto:asma.firouss@gmail.com",
    icon: FaEnvelope,
    colorClass: "bg-[#302824] text-white hover:bg-[#1E1916]",
    ariaLabel: "Email Fathima Asma",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/asmafirous",
    icon: FaLinkedinIn,
    colorClass: "bg-[#0A66C2] text-white hover:bg-[#0956a3]",
    ariaLabel: "Connect with Fathima Asma on LinkedIn",
  },
  {
    name: "Phone / Call",
    url: "tel:+94768245631",
    icon: FaPhone,
    colorClass: "bg-[#10B981] text-white hover:bg-[#059669]",
    ariaLabel: "Call Fathima Asma",
  },
];

export default function FloatingSocialBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.8,
      transition: { duration: 0.15 },
    },
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) setIsOpen(false);
      }}
    >
      {/* Social Items (Animated Dropdown/Dropup) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center gap-2.5 mb-1"
          >
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.ariaLabel}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-all duration-300 ${item.colorClass}`}
                >
                  <Icon className="h-5 w-5" />

                  {/* Tooltip Label */}
                  <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-[#302824] px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 dark:bg-[#EFE7DE] dark:text-[#302824]">
                    {item.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Floating Action Button */}
      <motion.button
        type="button"
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle contact links"
        aria-expanded={isOpen}
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[#302824] text-[#F8F5F0] shadow-xl ring-4 ring-[#C5B19F]/20 transition-colors hover:bg-[#1E1916] focus:outline-none dark:bg-[#EFE7DE] dark:text-[#302824]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
