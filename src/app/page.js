"use client";

import { useRef } from "react";
import {
  Header,
  Banner,
  InfoCounter,
  Album,
  Footer,
  Quotes,
} from "@components";
import styles from "@styles/home.module.scss";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main className="main">
      <div className={styles.top_part}>
        <Header />
        <Banner />
        <InfoCounter />
      </div>
      <Quotes />
      <div ref={containerRef} className={styles.bottom_part}>
        <Album containerRef={containerRef} />
        <Footer />
      </div>
    </main>
  );
}
