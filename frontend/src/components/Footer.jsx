import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/50 py-4 px-6">
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
        <span>© {new Date().getFullYear()} Bill</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          {t("footer.status")}
        </span>
      </div>
    </footer>
  );
}
