import {
  Header,
  Footer,
  PortfolioBanner,
  PortfolioItem,
  FooterQuote,
  ScrollToTop,
} from "@components";
import { VILLAS } from "@constants";
import "@styles/portfolio.scss";

export default function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioBanner />
      {VILLAS.map((villa, index) => (
        <PortfolioItem key={index} item={villa} />
      ))}
      <div className="footer_quote_wrapper">
        <FooterQuote
          text='"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."'
          author="- Antoine de Saint-Exupéry"
        />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}
