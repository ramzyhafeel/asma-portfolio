import { motion } from "framer-motion";

export default function ExpertiseCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      className="group rounded-3xl border border-(--border-subtle) bg-(--surface) p-6 sm:p-7 shadow-xs surface-hover"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: 0.05 * index }}
    >
      {/* Icon */}
      <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-(--surface-soft) text-(--accent) transition-all duration-300 group-hover:bg-(--secondary) group-hover:text-(--accent) group-hover:scale-105">
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold tracking-tight text-(--text)">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
        {description}
      </p>
    </motion.div>
  );
}