"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MENU, CONTACT_LINKS } from "@constants";
import { useHiddenPage, useScrollUp } from "@hooks";
import { isPathsAreEqual } from "@utils";
import { MenuBurger } from "./menu-burger";
import { ArchitecturesList } from "../architectures-list";
import styles from "./index.module.scss";

export function Menu({ mode }) {
  const [showArchitectures, setShowArchitectures] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const scrollUp = useScrollUp();

  useHiddenPage(showArchitectures);

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

  const handleToggleClassName = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    if (showMenu) {
      setCount((prev) => ++prev);
    }
  }, [showMenu]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.menu_container} ${
          showMenu ? styles.open_menu : ""
        }`}
      >
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

        <div className={styles.contacts_container}>
          {CONTACT_LINKS.map((item) => (
            <Link
              key={item.name}
              target={item.target}
              href={item.href}
              className={styles.contact_link}
            >
              {item.name}
              <FontAwesomeIcon icon={faArrowUpLong} className={styles.arrow} />
            </Link>
          ))}
        </div>
      </div>

      {showArchitectures && (
        <ArchitecturesList onClose={handleCloseArchitectures} mode={mode} />
      )}

      <p style={{ color: "white" }}>{count}</p>
      <MenuBurger open={showMenu} onClick={handleToggleClassName} />
    </div>
  );
}
