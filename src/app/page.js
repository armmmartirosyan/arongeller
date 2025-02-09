import { Header, Banner, InfoCounter, Album, Footer } from "@components";
import styles from "@styles/home.module.scss";

export default function Home() {
  return (
    <main className="main">
      <div className={styles.top_part}>
        <Header />
        <Banner />
        <InfoCounter />
      </div>
      <Album />
      <Footer />
    </main>
  );
}
