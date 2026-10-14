import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiDocker,
  SiFigma,
  SiVite,
  SiFirebase,
  SiVercel,
  SiPostgresql,
  SiSpring,
  SiDotnet,
  SiPhp,
  SiKotlin,
  SiPostman,
  SiExpress,
  SiNextdotjs,
  SiSqlite,
} from "react-icons/si";

export const skillIcons = {
  Java: SiSpring,
  "C#": SiDotnet,
  PHP: SiPhp,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  Firebase: SiFirebase,
  "Tailwind CSS": SiTailwindcss,
  Git: SiGit,
  Docker: SiDocker,
  Figma: SiFigma,
  Vite: SiVite,
  Vercel: SiVercel,
  Kotlin: SiKotlin,
  Postman: SiPostman,
};

export default function SkillCard({ name, index = 0 }) {
  const Icon = skillIcons[name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="flex items-center gap-3.5 rounded-2xl border border-(--border-subtle) bg-(--surface) p-3.5 sm:p-4 shadow-xs transition-all duration-200 hover:border-(--secondary) hover:bg-(--surface-soft)">
        {/* Subtle Icon Box */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--surface-soft) text-(--accent) transition-all duration-200 group-hover:bg-(--secondary)/40 group-hover:scale-105">
          {Icon ? (
            <Icon className="h-5 w-5" />
          ) : (
            <span className="text-xs font-bold">{name.slice(0, 2)}</span>
          )}
        </div>

        {/* Name */}
        <span className="text-sm font-semibold tracking-tight text-(--text) transition-colors group-hover:text-(--accent)">
          {name}
        </span>
      </div>
    </motion.div>
  );
}