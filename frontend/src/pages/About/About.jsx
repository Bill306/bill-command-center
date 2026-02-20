import { useTranslation } from "react-i18next";
import { personalInfo } from "@/data/personalInfo";
import SkillBars from "@/components/Panels/SkillBar";
import InterestCards from "@/components/Panels/InterestCard";
import { motion } from "motion/react";

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm text-cyan-400"
      >
        {">"} {t("about.title")}
        <span className="text-border"> ──────────────────────────</span>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-5"
      >
        <h2 className="font-mono text-sm text-cyan-400 tracking-wider mb-4">
          {t("about.bio_title")}
          <span className="text-border ml-2">═══════════════════</span>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {personalInfo.bio[lang]}
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SkillBars />
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <InterestCards />
      </motion.div>
    </div>
  );
}
