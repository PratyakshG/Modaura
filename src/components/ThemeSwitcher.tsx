"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  
  return (
    <div className="">
        <button 
        className="p-2 rounded-full text-slate-500 bg border-slate-50 "
        onClick={() => { currentTheme === "light" ?
            setTheme("dark") :
            setTheme("light")
        }}
        >
        { currentTheme === "light" ? "DARK" : "LIGHT" }
        </button>
    </div>
  );
};