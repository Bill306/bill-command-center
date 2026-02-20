import { useTranslation } from "react-i18next";
import ProjectPlaceholder from "@/components/Panels/ProjectPlaceholder";
import { motion } from "motion/react";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm text-cyan-400"
      >
        {">"} {t("projects.title")}
        <span className="text-border"> ──────────────────────────</span>
      </motion.div>

      {/* Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ProjectPlaceholder />
      </motion.div>
    </div>
  );
}
