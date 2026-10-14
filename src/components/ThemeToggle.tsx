"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: next-themes can't know the theme on the server.
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center theme-display rounded-full border border-line bg-bgsoft text-ink text-sm"
    >
      {mounted ? (theme === "dark" ? "☀" : "◐") : "◐"}
    </button>
  );
}
