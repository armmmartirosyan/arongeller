"use client";

import { useCallback } from "react";

export function useScrollUp() {
  return useCallback((e) => {
    const parentElement = document.getElementById("main");

    if (!parentElement) {
      return;
    }

    e.preventDefault();
    parentElement.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    parentElement.children[0]?.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, []);
}
