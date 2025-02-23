// "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { zoomIn } from "@utils";
import styles from "./index.module.scss";

export function CopyAuthor() {
  return (
    <div
      className={styles.creator_container}
      // {...zoomIn("spring", 0.1, 0.1)}
    >
      <p className={styles.footer_text}>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
      <p className={styles.footer_text}>
        Powered by{" "}
        <Link
          href="https://portfolio-armen.vercel.app/en"
          target="_blank"
          className={styles.creator_link}
        >
          Armen Martirosyan
        </Link>
      </p>
    </div>
  );
}
