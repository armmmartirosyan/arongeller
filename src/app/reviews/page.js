"use client";

import { motion } from "framer-motion";
import { Header, Footer, ReviewCard, ScrollToTop } from "@components";
import { REVIEWS } from "@constants";
import { textVariant } from "@utils";
import styles from "@styles/reviews.module.scss";

export default function Reviews() {
  return (
    <main id="main" className="main">
      <Header />
      <div className={styles.page_head_text_wrapper}>
        <motion.h1
          className={styles.page_header}
          {...textVariant({ once: true })}
        >
          Reviews
        </motion.h1>
      </div>
      <div className={styles.reviews_list}>
        {REVIEWS.map((item, index) => (
          <ReviewCard key={item.reviewer} item={item} index={index} />
        ))}
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
