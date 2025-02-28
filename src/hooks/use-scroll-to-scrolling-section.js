"use client";

import { useCallback } from "react";

export function useScrollToScrollingSection(id) {
  return useCallback((e) => {
    const clientRect = e.target.getBoundingClientRect();

    if (clientRect.y !== 0) {
      const scrollElement = document.getElementById(id);

      scrollElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
}
