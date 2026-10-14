import Container from "./Container";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  children,
}) {
  return (
    <section id={id} className={`scroll-mt-header py-16 sm:py-24 ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && (
              <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-(--border-subtle) bg-(--surface-soft) px-3.5 py-1 text-xs font-bold tracking-widest text-(--text-secondary)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--secondary)" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold tracking-tight text-(--text) sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3.5 text-base leading-relaxed text-(--text-secondary) sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}