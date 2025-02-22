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

export default function Home() {
  return (
    <main className={`${styles.main} main`}>
      <div className={styles.top_part}>
        <Header />
        <Banner />
        <InfoCounter />
      </div>
      <Quotes />
      <Album />
      <div className={styles.footer_quote_wrapper}>
        <FooterQuote />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}
