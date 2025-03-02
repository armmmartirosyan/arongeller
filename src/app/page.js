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
    <main id="main" className={`${styles.main} main`}>
      <Header />
      <Banner />
      <InfoCounter />
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
