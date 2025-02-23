"use client";

import { Header, Footer, ReviewCard, ScrollToTop } from "@components";
import { REVIEWS } from "@constants";
import styles from "@styles/reviews.module.scss";

export default function Reviews() {
  return (
    <main className="main">
      <Header />
      <div className={styles.page_head_text_wrapper}>
        <h1 className={styles.page_header}>Reviews</h1>
      </div>
      <div className={styles.reviews_list}>
        {REVIEWS.map((item) => (
          <ReviewCard key={item.reviewer} item={item} />
        ))}
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
