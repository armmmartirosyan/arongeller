"use client";

import Image from "next/image";
import { logo } from "@icons";
import styles from "./index.module.scss";
import { useCallback } from "react";

export function Logo() {
  const handleclick = useCallback(() => {
    window.location.href = "/";
  }, []);

  return (
    <figure onClick={handleclick} className={styles.logo_figure}>
      <Image
        loading="eager"
        priority
        quality={60}
        src={logo}
        className={styles.logo}
        alt="Aron Geller"
        height="auto"
      />
    </figure>
  );
}
