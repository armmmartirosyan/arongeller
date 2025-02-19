import {
  Header,
  Banner,
  InfoCounter,
  Footer,
  Quotes,
  Album,
} from "@components";
import styles from "@styles/home.module.scss";

export default function Home() {
  return (
    <main className="main">
      <div className={styles.top_part}>
        <Header />
        <Banner />
        <InfoCounter />
      </div>
      <Quotes />
      <Album />
      <Footer />
    </main>
  );
}
