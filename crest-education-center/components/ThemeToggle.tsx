"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure rendering only happens after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid SSR/CSR mismatch
    return null;
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      )}
    </Button>
  );
}
