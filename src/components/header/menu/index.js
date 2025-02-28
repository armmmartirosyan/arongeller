"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MENU } from "@constants";
import { useHiddenPage, useScrollUp } from "@hooks";
import { isPathsAreEqual } from "@utils";
import { MenuBurger } from "./menu-burger";
import { ArchitecturesList } from "../architectures-list";
import styles from "./index.module.scss";

export function Menu({ mode }) {
  const [showArchitectures, setShowArchitectures] = useState(false);
  const pathname = usePathname();
  const scrollUp = useScrollUp();

  const handleCloseArchitectures = useCallback(() => {
    setShowArchitectures(false);
  }, []);

  const handleMenuItemClick = useCallback(
    (item, e) => {
      if (item.scroll && pathname === item.link) {
        scrollUp(e);
        return;
      }

      item.onClick(setShowArchitectures);
    },
    [scrollUp, pathname]
  );

  useHiddenPage(showArchitectures);

  return (
    <div className={`${styles.wrapper} ${styles[mode]}`}>
      <div className={styles.menu_container}>
        {MENU.map((item) => (
          <Link
            href={item.link}
            key={item.text}
            className={`${styles.link} ${
              isPathsAreEqual(pathname, item.activePath) ? styles.active : ""
            }`}
            onClick={(e) => handleMenuItemClick(item, e)}
          >
            {item.text}
          </Link>
        ))}

        {showArchitectures && (
          <ArchitecturesList onClose={handleCloseArchitectures} mode={mode} />
        )}
      </div>
      <MenuBurger open={false} mode={mode} />
    </div>
  );
}
