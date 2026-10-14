import { motion } from "framer-motion";
import Section from "./layout/Section";
import ExpertiseCard from "./ExpertiseCard";
import { siteData } from "../config/siteData";

export default function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow={siteData.expertise.eyebrow}
      title={siteData.expertise.title}
      subtitle={siteData.expertise.subtitle}
    >
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {siteData.expertise.cards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45 }}
          >
            <ExpertiseCard {...card} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}