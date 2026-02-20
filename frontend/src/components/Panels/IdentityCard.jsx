import { useTranslation } from "react-i18next";
import { personalInfo } from "@/data/personalInfo";

export default function IdentityCard() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-5">
      <h2 className="font-mono text-sm text-cyan-400 tracking-wider mb-4">
        {t("home.identity")}
        <span className="text-border ml-2">═══════</span>
      </h2>

      <div className="space-y-3 font-mono text-sm">
        <div className="flex">
          <span className="text-muted-foreground w-24 shrink-0">{t("home.name_label")}</span>
          <span className="text-foreground font-semibold">{personalInfo.name}</span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground w-24 shrink-0">{t("home.role_label")}</span>
          <span className="text-foreground">{personalInfo.tagline[lang]}</span>
        </div>
        <div className="flex">
          <span className="text-muted-foreground w-24 shrink-0">{t("home.domain_label")}</span>
          <span className="text-foreground">Web3 · AI · History · Economy</span>
        </div>
        <div className="flex items-center">
          <span className="text-muted-foreground w-24 shrink-0">{t("home.status_label")}</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400">{personalInfo.status[lang]}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
