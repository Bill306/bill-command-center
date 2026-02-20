import { useTranslation } from "react-i18next";
import { skills } from "@/data/skillsData";
import { motion } from "motion/react";

export default function SkillBars() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-5">
      <h2 className="font-mono text-sm text-cyan-400 tracking-wider mb-5">
        {t("about.skills_title")}
        <span className="text-border ml-2">══════════</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="rounded-md border border-border/30 bg-background/50 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-sm text-foreground">
                {skill.category[lang]}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 rounded-full bg-muted overflow-hidden mb-3">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
