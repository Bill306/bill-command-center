import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Home, User, Code, Github } from "lucide-react";
import { navItems } from "@/data/navData";
import { personalInfo } from "@/data/personalInfo";
import ThemeToggle from "@/components/ThemeToggle";
import LangToggle from "@/components/LangToggle";

const iconMap = { Home, User, Code };

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 border-b border-border/50 bg-card/80 backdrop-blur-md flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="p-1.5 rounded-md hover:bg-accent/50 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-mono text-sm text-cyan-400">
            Bill — Command Center
          </span>
        </div>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-64 bg-card border-r border-border/50 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-mono font-bold text-lg">
            B.
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-md hover:bg-accent/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-mono transition-all ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label[lang]}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/50">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-accent/50"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </>
  );
}
