import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, Send } from "lucide-react";
import Section from "./layout/Section";
import ContactForm from "./ContactForm";
import { siteData } from "../config/siteData";

function InfoCard({ Icon, label, value, href, detail }) {
  const content = (
    <div className="rounded-3xl border border-(--border-subtle) bg-(--surface) p-6 shadow-xs surface-hover">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--surface-soft) text-(--accent)">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold tracking-widest text-(--muted) uppercase">
            {label}
          </p>
          <p className="mt-1 truncate text-base font-semibold text-(--text)">
            {value}
          </p>
          {detail && (
            <p className="mt-0.5 text-xs text-(--text-secondary)">
              {detail}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} className="block" aria-label={`${label}: ${value}`}>
      {content}
    </a>
  );
}

export default function Contact() {
  const { eyebrow, title, subtitle } = siteData.contact;

  return (
    <Section
      id="contact"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Contact Details & Social Links (5 cols) */}
        <motion.div
          className="space-y-5 lg:col-span-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <InfoCard
            Icon={Mail}
            label="EMAIL DIRECTLY"
            value={siteData.email}
            href={`mailto:${siteData.email}`}
            detail="Click to compose an email"
          />

          <InfoCard
            Icon={Phone}
            label="PHONE / CALL"
            value={siteData.phone}
            href={`tel:${siteData.phone}`}
            detail="Direct call & WhatsApp"
          />

          <InfoCard
            Icon={MapPin}
            label="LOCATION"
            value={siteData.location}
            detail="Open to on-site, hybrid, and remote roles"
          />

          {/* Career Objective Card */}
          <div className="rounded-3xl border border-(--border-subtle) bg-(--surface-soft) p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-(--accent)">
              <Sparkles className="h-4 w-4 text-(--secondary)" />
              Career Objective
            </div>
            <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
              Undergraduate pursuing HNDIT at SLIATE with a Diploma in English from the University of Peradeniya. Actively seeking to contribute to Royal Travels as a Female Executive in a remote role.
            </p>

            <div className="mt-5 border-t border-(--border-subtle) pt-4">
              <p className="text-xs font-semibold text-(--muted) mb-3">
                Connect on Professional Platforms
              </p>
              <div className="flex items-center gap-2.5">
                {siteData.socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="social-btn"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Working Contact Form (7 cols) */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}