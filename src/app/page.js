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
import "@styles/home.scss";

export default function Home() {
  return (
    <>
      <div className="top_part">
        <Header />
        <Banner />
        <InfoCounter />
      </div>
      <Quotes />
      <Album />
      <div className="footer_quote_wrapper">
        <FooterQuote />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}
