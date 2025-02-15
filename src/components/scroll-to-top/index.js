"use client";

import { useCallback, useState, useEffect, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

const handleScrollUp = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
};

export const ScrollToTop = memo(function ScrollToTop() {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = useCallback(() => {
    setShowGoTop(window.pageYOffset > 500);
    console.log("entered");
  }, []);

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", handleVisibleButton);

    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  if (!showGoTop) {
    return <></>;
  }

  return (
    <button
      className={`${styles.button} hide_on_page_hidden`}
      onClick={handleScrollUp}
    >
      <FontAwesomeIcon icon={faAngleUp} className={styles.icon} />
    </button>
  );
});
