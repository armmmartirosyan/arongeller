import {
  Header,
  Footer,
  PortfolioBanner,
  PortfolioItem,
  FooterQuote,
  ScrollToTop,
} from "@components";
import { VILLAS } from "@constants";
import styles from "@styles/portfolio.module.scss";

export default function Portfolio() {
  return (
    <main id="main" className={`${styles.main} main`}>
      <Header />
      <PortfolioBanner />
      {VILLAS.map((villa, index) => (
        <PortfolioItem key={index} item={villa} />
      ))}
      <div className={styles.footer_quote_wrapper}>
        <FooterQuote
          text='"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."'
          author="- Antoine de Saint-Exupéry"
        />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}
