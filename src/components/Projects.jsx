import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./layout/Section";
import ProjectCard from "./ProjectCard";
import { siteData } from "../config/siteData";

export default function Projects() {
  const chips = siteData.projects.filters;
  const [active, setActive] = useState(chips[0] || "All");

  const filtered = useMemo(() => {
    if (!active || active === "All") return siteData.projects.items;
    return siteData.projects.items.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <Section
      id="projects"
      eyebrow={siteData.projects.eyebrow}
      title={siteData.projects.title}
      subtitle={siteData.projects.subtitle}
    >
      {/* Filter chips — horizontal scroll on mobile */}
      <div className="mb-10 flex items-center justify-start gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
        {chips.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={isActive ? "chip chip-active" : "chip chip-idle"}
              aria-pressed={isActive}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid of project cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28 }}
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-(--border-subtle) bg-(--surface-soft) p-8 text-center text-sm text-(--muted)">
          No projects found for the selected category.
        </div>
      )}
    </Section>
  );
}