import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LangToggle() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-mono hover:bg-accent/50 transition-colors text-muted-foreground hover:text-foreground"
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{i18n.language === "en" ? "中" : "EN"}</span>
    </button>
  );
}
