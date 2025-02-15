"use client";

import { useEffect } from "react";
import { HIDDEN_PAGE_CLASS } from "@constants";

export function useHiddenPage(when) {
  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];

    if (when && !root.classList.contains(HIDDEN_PAGE_CLASS)) {
      root.classList.add(HIDDEN_PAGE_CLASS);
    } else {
      root.classList.remove(HIDDEN_PAGE_CLASS);
    }
  }, [when]);
}
