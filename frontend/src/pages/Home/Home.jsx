import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { skills } from "@/data/skillsData";
import IdentityCard from "@/components/Panels/IdentityCard";
import FieldsPanel from "@/components/Panels/FieldsPanel";
import { motion } from "motion/react";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="space-y-6">
      {/* System Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-sm text-cyan-400"
      >
        {t("home.welcome")}
        <span className="text-border"> ──────────────────────────</span>
      </motion.div>

      {/* Main Grid: Identity + Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3"
        >
          <IdentityCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <FieldsPanel />
        </motion.div>
      </div>

      {/* Skill Overview Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {skill.category[lang]}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-3">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.4 + idx * 0.15, ease: "easeOut" }}
              />
            </div>
            <div className="flex flex-wrap gap-1">
              {skill.items.slice(0, 3).map((item, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                >
                  {item}
                </span>
              ))}
              {skill.items.length > 3 && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                  +{skill.items.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center pt-2"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-cyan-500/30 text-cyan-400 text-sm font-mono hover:bg-cyan-500/10 transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          {t("home.view_github")}
        </a>
      </motion.div>
    </div>
  );
}
