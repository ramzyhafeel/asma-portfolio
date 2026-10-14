import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";

export default function Timeline({ items }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical timeline spine */}
      <div
        className="absolute left-4 sm:left-5 top-5 w-px"
        style={{
          bottom: "1.5rem",
          background:
            "linear-gradient(to bottom, var(--secondary), var(--border-subtle) 80%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.article
            key={`${item.title}-${item.period}-${i}`}
            className="relative flex gap-5 sm:gap-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 * i }}
          >
            {/* Timeline node */}
            <div className="relative flex w-8 sm:w-10 shrink-0 flex-col items-center">
              <div
                className="relative z-10 mt-6 h-3.5 w-3.5 rounded-full border-2 border-(--accent) bg-(--bg) shadow-xs ring-4 ring-(--secondary)/25"
                aria-hidden="true"
              />
            </div>

            {/* Timeline Card */}
            <div className="flex-1 rounded-3xl border border-(--border-subtle) bg-(--surface) p-6 sm:p-7 shadow-xs surface-hover">
              {/* Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-(--text)">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-(--accent)">
                    <Building2 className="h-3.5 w-3.5 text-(--secondary)" />
                    <span>{item.org}</span>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-(--surface-soft) px-3 py-1 text-xs font-semibold text-(--text-secondary)">
                    <Calendar className="h-3 w-3 text-(--secondary)" />
                    {item.period}
                  </div>
                  {item.location && (
                    <div className="mt-1.5 flex items-center justify-end gap-1 text-xs text-(--muted)">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {item.description && (
                <p className="mt-3.5 text-sm leading-relaxed text-(--text-secondary)">
                  {item.description}
                </p>
              )}

              {/* Highlights */}
              {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-(--border-subtle) pt-4">
                  {item.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-(--text-secondary)"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--secondary)"
                        aria-hidden="true"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}