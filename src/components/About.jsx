import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowUpRight, GraduationCap } from "lucide-react";
import Section from "./layout/Section";
import { siteData } from "../config/siteData";

export default function About() {
  const { eyebrow, title, subtitle, paragraphs, stats } = siteData.about;

  const scrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section
      id="about"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      className="bg-(--bg-alt)/40"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Relatable Image with warm beige styling (5 cols) */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Background decorative soft border frame */}
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-(--secondary) opacity-40 -z-10"
              aria-hidden="true"
            />

            <div className="overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--surface) shadow-xl shadow-(--primary)/5">
              <img
                src={siteData.aboutImage}
                alt="Fathima Asma coding at her desk"
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Supporting caption strip */}
              <div className="border-t border-(--border-subtle) bg-(--surface-soft) p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-(--accent)">Fathima Asma</p>
                    <p className="text-[11px] text-(--muted)">
                      HNDIT Undergraduate • SLIATE
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-(--accent) shadow-xs">
                    <GraduationCap className="h-3 w-3 text-(--secondary)" />
                    Class of 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Stats (7 cols) */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Biography paragraphs */}
          <div className="space-y-4 text-base leading-relaxed text-(--text-secondary)">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Quick stats grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-(--border-subtle) bg-(--surface) p-4 shadow-xs transition-colors hover:border-(--secondary)"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-(--muted)">
                  {stat.label}
                </p>
                <p className="mt-1 text-base font-bold text-(--accent)">
                  {stat.value}
                </p>
                <p className="text-xs text-(--text-secondary)">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="btn-primary px-6 py-3 text-sm shadow-sm"
            >
              <span>Get in Touch for Opportunities</span>
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("#experience")}
              className="btn-secondary px-6 py-3 text-sm"
            >
              <span>View Experience & Education</span>
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
