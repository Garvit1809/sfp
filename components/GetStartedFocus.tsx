"use client";

import { useEffect } from "react";

/* Focus the hero form when any "#get-started" button is clicked */
export default function GetStartedFocus() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest('a[href="#get-started"]');
      if (!a) return;
      setTimeout(() => document.getElementById("h-name")?.focus({ preventScroll: true }), 450);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
