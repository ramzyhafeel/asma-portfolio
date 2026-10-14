import { ArrowUp, Heart } from "lucide-react";
import { siteData } from "../config/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-(--border-subtle) bg-(--surface-soft) text-(--text)">
      {/* Main footer content */}
      <div className="mx-auto max-w-5xl px-6 py-14 text-center">
        {/* Name / Brand */}
        <p className="text-2xl font-extrabold tracking-tight text-(--text)">
          Fathima Asma
        </p>

        {/* Tagline */}
        <p className="mt-2 text-sm text-(--text-secondary)">
          HNDIT Undergraduate (SLIATE) • Diploma in English (Peradeniya) • Executive Professional
        </p>

        {/* Social icons */}
        <div className="mt-7 flex items-center justify-center gap-3">
          {siteData.socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="social-btn"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-(--border-subtle) px-6 py-5">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-(--muted)">
            © {new Date().getFullYear()} Fathima Asma. Designed with purpose & precision.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-xs font-semibold text-(--text) transition-all hover:border-(--secondary) hover:text-(--accent) shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}