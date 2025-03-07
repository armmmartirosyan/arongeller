"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { MENU, CONTACT_LINKS } from "@constants";
import { useHiddenPage, useScrollUp } from "@hooks";
import { isPathsAreEqual, fadeInTwo } from "@utils";
import { MenuBurger } from "./menu-burger";
import { ArchitecturesList } from "../architectures-list";
import styles from "./index.module.scss";

export function Menu({ mode }) {
  const [showArchitectures, setShowArchitectures] = useState(false);
  const [allowMenuAnimation, setAllowMenuAnimation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const scrollUp = useScrollUp();

  useHiddenPage(showArchitectures || showMenu);

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
    setAllowMenuAnimation(window.matchMedia("(max-width: 768px)").matches);

    function resize(e) {
      setAllowMenuAnimation(e.target.matchMedia("(max-width: 768px)").matches);
    }

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.menu_container} ${
          showMenu ? styles.open_menu : ""
        }`}
      >
        {allowMenuAnimation
          ? MENU.map((item, index) => (
              <motion.div
                key={item.text}
                className={`${styles.link_wrapper} ${
                  isPathsAreEqual(pathname, item.activePath)
                    ? styles.active
                    : ""
                }`}
                {...fadeInTwo({
                  directionX: "left",
                  directionY: "down",
                  delay: (index + 1 - 0.1) * 0.07,
                  duration: 0.35,
                })}
              >
                <Link
                  href={item.link}
                  className={styles.link}
                  onClick={(e) => handleMenuItemClick(item, e)}
                >
                  {item.text}
                </Link>
                <div className={styles.link_dash} />
              </motion.div>
            ))
          : MENU.map((item, index) => (
              <div
                key={item.text}
                className={`${styles.link_wrapper} ${
                  isPathsAreEqual(pathname, item.activePath)
                    ? styles.active
                    : ""
                }`}
              >
                <Link
                  href={item.link}
                  className={styles.link}
                  onClick={(e) => handleMenuItemClick(item, e)}
                >
                  {item.text}
                </Link>
                <div className={styles.link_dash} />
              </div>
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
      <MenuBurger open={showMenu} onClick={handleToggleClassName} />
    </div>
  );
}
