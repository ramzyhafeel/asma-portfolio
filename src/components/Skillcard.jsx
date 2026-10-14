import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  FileText,
  Award,
  Presentation,
  CalendarCheck,
  Clock,
  ListTodo,
  UserCheck,
  Briefcase,
  Table,
  Globe,
  Mail,
  Video,
  Laptop,
  Code,
  Languages,
  Sparkles,
  Compass,
  RefreshCw,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

export const skillIcons = {
  // Communication
  "Public Speaking": MessageSquare,
  "Customer Interaction": Users,
  "Professional Writing": FileText,
  "Speech & Debate": Award,
  "Presentation Skills": Presentation,
  "Active Listening": MessageSquare,

  // Organization
  "Event Planning": CalendarCheck,
  Scheduling: Clock,
  "Task Coordination": ListTodo,
  "Registration Desk Management": UserCheck,
  "Time Management": Clock,
  "Administrative Support": Briefcase,

  // Technology & Tools
  "MS Word": FileText,
  "MS Excel": Table,
  "MS PowerPoint": Presentation,
  "Google Workspace": Globe,
  "Email Etiquette": Mail,
  "Zoom & Virtual Meetings": Video,
  "IT Fundamentals": Laptop,
  "Web Basics": Code,

  // Languages
  "English (Fluent)": Languages,
  "Sinhala (Native)": Languages,
  "Tamil (Basic)": Languages,

  // Personal Strengths
  "Self-motivated": Sparkles,
  Independent: Compass,
  Adaptable: RefreshCw,
  "Team-oriented": Users,
  "Detail-oriented": CheckCircle2,
  "Problem Solving": Lightbulb,
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
            <Icon className="h-5 w-5 text-(--accent)" />
          ) : (
            <span className="text-xs font-bold text-(--accent)">{name.slice(0, 2)}</span>
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