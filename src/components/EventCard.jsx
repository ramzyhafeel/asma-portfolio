import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X } from "lucide-react";

export default function EventCard({ item, mode = "grid", index = 0 }) {
  const [open, setOpen] = useState(false);

  const isCarousel = mode === "carousel";

  return (
    <>
      <motion.article
        className={[
          "event-card surface surface-hover cursor-pointer overflow-hidden rounded-2xl border border-(--border)",
          // ✅ carousel width control (mobile full, desktop limited + centered)
          isCarousel ? "mx-auto w-full max-w-[92vw] sm:max-w-140 lg:max-w-180" : "",
        ].join(" ")}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.42, delay: 0.03 * index }}
        onClick={() => setOpen(true)}
      >
        {/* Image */}
        <div
          className={[
            "relative overflow-hidden",
            // ✅ carousel height control (mobile a bit taller, desktop smaller)
            isCarousel
              ? "aspect-video max-h-60 sm:max-h-65 lg:max-h-70"
              : "aspect-4/3",
          ].join(" ")}
        >
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-linear-to-br from-(--primary)/20 to-(--surface)" />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          {/* Meta badges */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <Calendar className="h-3 w-3" />
              {item.date}
            </span>
            {item.location && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                <MapPin className="h-3 w-3" />
                {item.location}
              </span>
            )}
          </div>

          {/* Category badge */}
          {item.category && (
            <div className="absolute right-3 top-3">
              <span className="rounded-full bg-(--primary) px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {item.category}
              </span>
            </div>
          )}
        </div>

        {/* Text */}
        <div className={isCarousel ? "p-5 sm:p-6" : "p-5"}>
          <h3 className="text-base font-extrabold tracking-tight text-(--text)">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.caption || item.description}
          </p>
        </div>
      </motion.article>

      {/* Modal lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-(--bg) shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
              )}

              <div className="p-6">
                {item.category && (
                  <span className="mb-2 inline-block rounded-full bg-(--primary)/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-(--primary)">
                    {item.category}
                  </span>
                )}
                <h3 className="text-xl font-extrabold tracking-tight text-(--text)">
                  {item.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {item.date}
                  </span>
                  {item.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {item.location}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description || item.caption}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}