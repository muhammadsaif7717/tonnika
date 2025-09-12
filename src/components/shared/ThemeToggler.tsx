'use client'
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    
    setIsLoading(false);
  }, []);

  const toggleTheme = () => {
    if (isDark === null || isLoading) return;

    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Show loading state to prevent hydration issues
  if (isDark === null || isLoading) {
    return (
      <div className="w-10 h-10 rounded-full bg-sage-100 dark:bg-sage-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-full transition-all duration-500 ease-out
        bg-gradient-to-br from-sage-50 to-sage-100 scale-75 lg:scale-100 
        hover:from-sage-100 hover:to-sage-150
        dark:from-gray-800 dark:to-gray-700 
        dark:hover:from-gray-700 dark:hover:to-gray-600
        border border-sage-200/50 dark:border-gray-600/50
        shadow-sm hover:shadow-md
        transform hover:scale-105 active:scale-95
        group overflow-hidden
      `}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Background glow effect */}
      <div className={`
        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${isDark 
          ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20' 
          : 'bg-gradient-to-br from-amber-300/30 to-orange-300/30'
        }
      `} />
      
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-700 ease-out transform
            text-amber-500 group-hover:text-amber-400
            ${isDark 
              ? "rotate-180 scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
            }
          `}
        />
        
        {/* Moon Icon */}
        <Moon
          className={`
            absolute inset-0 w-5 h-5 transition-all duration-700 ease-out transform
            text-slate-400 dark:text-slate-300 group-hover:text-slate-200
            ${isDark 
              ? "rotate-0 scale-100 opacity-100" 
              : "-rotate-180 scale-0 opacity-0"
            }
          `}
        />
      </div>

      {/* Subtle ring animation on theme change */}
      <div className={`
        absolute inset-0 rounded-full border-2 transition-all duration-1000
        ${isDark 
          ? 'border-slate-400/0 animate-ping' 
          : 'border-amber-400/0 animate-ping'
        }
      `} />
    </button>
  );
};

export default ThemeToggler;