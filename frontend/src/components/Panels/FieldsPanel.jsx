import { useTranslation } from "react-i18next";
import { interests } from "@/data/interestsData";

export default function FieldsPanel() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-5">
      <h2 className="font-mono text-sm text-purple-400 tracking-wider mb-4">
        {t("home.fields")}
      </h2>

      <div className="space-y-2.5">
        {interests.map((interest, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <span className="text-cyan-400 mt-0.5 text-sm">◉</span>
            <div>
              <span className="font-mono text-sm text-foreground">
                {interest.label[lang]}
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                {interest.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
