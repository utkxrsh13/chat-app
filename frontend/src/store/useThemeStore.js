import { create } from "zustand";

export const useThemeStore = create((set) => {
  const storedTheme = localStorage.getItem("chat-theme") || "coffee";
  document.documentElement.setAttribute("data-theme", storedTheme);

  return {
    theme: storedTheme,
    setTheme: (theme) => {
      console.log("Setting theme to:", theme);
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme); // Ensure immediate application
      set({ theme });
    },
  };
});

