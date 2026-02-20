import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, User, Code, Github } from "lucide-react";
import { navItems } from "@/data/navData";
import { personalInfo } from "@/data/personalInfo";
import ThemeToggle from "@/components/ThemeToggle";
import LangToggle from "@/components/LangToggle";

const iconMap = { Home, User, Code };

export default function Sidebar() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <aside className="hidden lg:flex flex-col w-56 min-h-screen border-r border-border/50 bg-card/50 backdrop-blur-sm p-4 justify-between fixed left-0 top-0 z-40">
      <div>
        {/* Logo */}
        <div className="mb-8 pt-2">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-mono font-bold text-2xl shadow-lg shadow-cyan-500/20">
            B.
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-6" />

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {isActive && (
                  <span className="text-cyan-400 text-xs mr--1">●</span>
                )}
                {!isActive && (
                  <span className="text-muted-foreground text-xs mr--1">○</span>
                )}
                <Icon className="w-4 h-4" />
                <span>{item.label[lang]}</span>
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="h-px bg-border/50 my-6" />

        {/* Links */}
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground font-mono px-3 uppercase tracking-wider">
            Links
          </span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="space-y-2">
        <div className="h-px bg-border/50 mb-3" />
        <div className="flex items-center justify-between px-1">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
