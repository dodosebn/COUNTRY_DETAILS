'use client';
import React, {useState,useEffect } from "react";
import { ConstTop } from "@/components";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 97%)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      darkMode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"
    );
  }, [darkMode]);
  return (
 
    <html lang="en">
      <body>
      <ConstTop darkMode={darkMode} setDarkMode={setDarkMode}/>
        {children}
      </body>
    </html>
  );
}
