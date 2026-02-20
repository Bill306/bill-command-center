import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md hover:bg-accent/50 transition-colors text-muted-foreground hover:text-foreground"
      aria-label="Toggle theme"
    >
      <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="w-4 h-4 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" style={{ marginTop: "-16px" }} />
    </button>
  );
}
