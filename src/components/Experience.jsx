import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section from "./layout/Section";
import Timeline from "./Timeline";
import { siteData } from "../config/siteData";

export default function Experience() {
  const tabs = siteData.experience.tabs;
  const [active, setActive] = useState(tabs[0]?.key || "experience");

  const activeData = useMemo(() => {
    const found = tabs.find((t) => t.key === active);
    return found?.items || [];
  }, [active, tabs]);

  return (
    <Section
      id="experience"
      eyebrow={siteData.experience.eyebrow}
      title={siteData.experience.title}
      subtitle={siteData.experience.subtitle}
      className="bg-(--bg-alt)/30"
    >
      {/* Tab Toggle */}
      <div className="mb-12 flex justify-center">
        <div className="toggle-shell shadow-xs">
          {tabs.map((t) => {
            const isActive = t.key === active;
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`inline-flex items-center gap-2 ${
                  isActive ? "toggle-btn toggle-active" : "toggle-btn toggle-idle"
                }`}
                aria-pressed={isActive}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline with smooth crossfade */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Timeline items={activeData} />
      </motion.div>
    </Section>
  );
}