"use client";

import {
  Header,
  Banner,
  InfoCounter,
  Footer,
  Quotes,
  Album,
  ScrollToTop,
  FooterQuote,
} from "@components";
import styles from "@styles/home.module.scss";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main id="main" className={`${styles.main} main`} ref={containerRef}>
      <Header />
      <Banner />
      <InfoCounter />
      <Quotes />
      <Album containerRef={containerRef} />
      <div className={styles.footer_quote_wrapper}>
        <FooterQuote />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}
