import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./layout/Section";
import SkillCard from "./Skillcard";
import { siteData } from "../config/siteData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...siteData.skills.categories.map((c) => c.name)];
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      const all = [];
      siteData.skills.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          if (!all.includes(item)) all.push(item);
        });
      });
      return all;
    }

    const found = siteData.skills.categories.find(
      (c) => c.name === activeCategory
    );
    return found ? found.items : [];
  }, [activeCategory]);

  return (
    <Section
      id="skills"
      eyebrow={siteData.skills.eyebrow}
      title={siteData.skills.title}
      subtitle={siteData.skills.subtitle}
      className="bg-(--bg-alt)/30"
    >
      {/* Category filter pills */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={isActive ? "chip chip-active" : "chip chip-idle"}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of skill cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28 }}
        >
          {filteredSkills.map((skill, i) => (
            <SkillCard key={skill} name={skill} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Hint */}
      <div className="mt-12 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-(--border-subtle) bg-(--surface) px-5 py-2 text-xs font-semibold text-(--muted)">
          <span className="h-1.5 w-1.5 rounded-full bg-(--secondary)" />
          Actively expanding expertise in cloud infrastructure & microservices
          <span className="h-1.5 w-1.5 rounded-full bg-(--secondary)" />
        </p>
      </div>
    </Section>
  );
}