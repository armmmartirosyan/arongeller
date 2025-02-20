"use client";

import { useCallback, useState, useEffect, memo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export const ScrollToTop = memo(function ScrollToTop() {
  const [showGoTop, setShowGoTop] = useState(true);
  const parentElement = useRef(null);
  const ref = useRef();

  const handleScrollUp = useCallback(() => {
    parentElement.current.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    parentElement.current.children[0]?.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, [parentElement.current]);

  const handleVisibleButton = useCallback(() => {
    setShowGoTop(parentElement.current.scrollTop > 500);
  }, []);

  useEffect(() => {
    if (ref.current) {
      parentElement.current = ref.current.parentElement;

      parentElement.current.addEventListener("scroll", handleVisibleButton);

      setShowGoTop(parentElement.current.scrollTop > 500);

      return () =>
        parentElement.current.removeEventListener(
          "scroll",
          handleVisibleButton
        );
    }
  }, []);

  if (!showGoTop) {
    return <></>;
  }

  return (
    <button
      className={`${styles.button} hide_on_page_hidden`}
      onClick={handleScrollUp}
      ref={ref}
    >
      <FontAwesomeIcon icon={faAngleUp} className={styles.icon} />
    </button>
  );
});
