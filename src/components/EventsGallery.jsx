import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid, Images } from "lucide-react";
import Section from "./layout/Section";
import EventCard from "./EventCard";
import { siteData } from "../config/siteData";

export default function EventsGallery() {
  const [view, setView] = useState("carousel"); // "carousel" | "grid"
  const items = siteData.events.items;
  const [active, setActive] = useState(0);

  const total = items.length;

  const safeActive = useMemo(() => {
    if (total === 0) return 0;
    return ((active % total) + total) % total;
  }, [active, total]);

  const goPrev = () => setActive((v) => v - 1);
  const goNext = () => setActive((v) => v + 1);

  return (
    <Section
      id="events"
      eyebrow={siteData.events.eyebrow}
      title={siteData.events.title}
      subtitle={siteData.events.subtitle}
    >
      {/* View Toggle */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <div className="toggle-shell surface">
          <button
            type="button"
            onClick={() => setView("carousel")}
            className={view === "carousel" ? "toggle-btn toggle-active" : "toggle-btn toggle-idle"}
            aria-pressed={view === "carousel"}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <Images className="h-4 w-4" />
              Carousel
            </span>
          </button>

          <button
            type="button"
            onClick={() => setView("grid")}
            className={view === "grid" ? "toggle-btn toggle-active" : "toggle-btn toggle-idle"}
            aria-pressed={view === "grid"}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <LayoutGrid className="h-4 w-4" />
              Grid
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait" initial={false}>
        {view === "carousel" ? (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="events-carousel-wrap relative">
              {/* arrows */}
              <button
                type="button"
                onClick={goPrev}
                className="carousel-arrow left-3"
                aria-label="Previous event"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goNext}
                className="carousel-arrow right-3"
                aria-label="Next event"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* stage (✅ centered, responsive) */}
              <div
                className="events-carousel-stage mx-auto w-full max-w-[92vw] sm:max-w-160 lg:max-w-205"
                aria-live="polite"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={items[safeActive]?.id || safeActive}
                    initial={{ opacity: 0, x: 30, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                  >
                    {items[safeActive] ? (
                      <EventCard item={items[safeActive]} mode="carousel" />
                    ) : (
                      <div className="surface rounded-2xl p-6 text-center text-sm text-muted">
                        No events yet.
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* dots */}
              {total > 1 && (
                <div className="mt-5 flex justify-center gap-2">
                  {items.map((_, i) => {
                    const isOn = i === safeActive;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActive(i)}
                        className={isOn ? "dot dot-on" : "dot dot-off"}
                        aria-label={`Go to event ${i + 1}`}
                        aria-pressed={isOn}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item, i) => (
              <EventCard key={item.id} item={item} mode="grid" index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}