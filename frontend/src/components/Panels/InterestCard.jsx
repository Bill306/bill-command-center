import { useTranslation } from "react-i18next";
import { Brain, Link, BookOpen, TrendingUp } from "lucide-react";
import { interests } from "@/data/interestsData";
import { motion } from "motion/react";

const iconMap = { Brain, Link, BookOpen, TrendingUp };

export default function InterestCards() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-5">
      <h2 className="font-mono text-sm text-purple-400 tracking-wider mb-5">
        {t("about.interests_title")}
        <span className="text-border ml-2">════════════</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {interests.map((interest, idx) => {
          const Icon = iconMap[interest.icon];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-md border border-border/30 bg-background/50 p-4 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-md bg-muted group-hover:bg-cyan-500/10 transition-colors">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-mono text-sm text-foreground">
                  {interest.label[lang]}
                </span>
              </div>
              <p className="text-xs text-muted-foreground pl-11">
                {interest.description[lang]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
