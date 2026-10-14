import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, tags, githubUrl, demoUrl, imageUrl, category } = project;

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--surface) shadow-xs transition-all duration-300 hover:shadow-xl hover:border-(--secondary)/60 hover:-translate-y-1.5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: 0.05 * index }}
    >
      {/* Project Preview Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-(--surface-soft)">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-(--surface-soft) text-(--muted)">
            <Sparkles className="h-8 w-8 text-(--secondary)" />
          </div>
        )}

        {/* Category Pill Tag */}
        {category && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center rounded-full bg-[#302824]/80 px-3 py-1 text-[11px] font-semibold text-[#F8F5F0] backdrop-blur-md dark:bg-white/90 dark:text-[#302824]">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-lg font-bold tracking-tight text-(--text) transition-colors group-hover:text-(--accent)">
          {title}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-(--text-secondary)">
          {description}
        </p>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-6 flex items-center gap-3 border-t border-(--border-subtle) pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-soft inline-flex items-center gap-1.5 text-xs font-semibold"
              aria-label={`Open GitHub repository for ${title}`}
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source Code</span>
            </a>
          )}

          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-(--accent) px-4 py-2 text-xs font-semibold text-[#F8F5F0] transition-transform hover:-translate-y-0.5 shadow-xs dark:bg-[#EFE7DE] dark:text-[#302824]"
              aria-label={`Open live demo for ${title}`}
            >
              <span>Live Site</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-(--muted)">
              <span className="h-1.5 w-1.5 rounded-full bg-(--secondary)" />
              Enterprise Internal System
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}