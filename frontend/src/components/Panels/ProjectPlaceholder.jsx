import { useTranslation } from "react-i18next";
import { Terminal, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { motion } from "motion/react";

export default function ProjectPlaceholder() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-lg border border-dashed border-border/50 bg-card/30 backdrop-blur-sm p-8 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-muted">
          <Terminal className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      <div className="font-mono text-sm space-y-2 text-muted-foreground">
        <p className="text-cyan-400">{t("projects.status")}</p>
        <p>{t("projects.message")}</p>
        <p className="text-amber-400">{t("projects.eta")}</p>
      </div>

      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-md border border-cyan-500/30 text-cyan-400 text-sm font-mono hover:bg-cyan-500/10 transition-all"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        {t("projects.cta")}
      </a>
    </motion.div>
  );
}
