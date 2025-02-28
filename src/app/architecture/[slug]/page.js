import {
  Header,
  Footer,
  ArchitectureContent,
  FooterQuote,
  ScrollToTop,
} from "@components";
import { PROJECTS } from "@constants";
import styles from "@styles/architecture.module.scss";

export default async function Architecture({ params }) {
  const slug = (await params).slug;
  const project = PROJECTS.find((project) => project.number === slug);

  return (
    <main id="main" className={`${styles.main} main`}>
      <Header />
      <ArchitectureContent project={project} />
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
