"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { MENU } from "@constants";
import { useHiddenPage } from "@hooks";
import { MenuBurger } from "./menu-burger";
import { ArchitecturesList } from "../architectures-list";
import styles from "./index.module.scss";

export function Menu() {
  const [showArchitectures, setShowArchitectures] = useState(false);

  const handleCloseArchitectures = useCallback(() => {
    setShowArchitectures(false);
  }, []);

  useHiddenPage(showArchitectures);

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_container}>
        {MENU.map((item) => (
          <Link
            href={item.link}
            key={item.text}
            className={styles.link}
            onClick={() => item.onClick(setShowArchitectures)}
            scroll={item.scroll}
          >
            {item.text}
          </Link>
        ))}

        {showArchitectures && (
          <ArchitecturesList onClose={handleCloseArchitectures} />
        )}
      </div>
      <MenuBurger open={false} />
    </div>
  );
}
