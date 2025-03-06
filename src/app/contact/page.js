import {
  Header,
  Footer,
  ContactForm,
  ScrollToTop,
  MotionWrapper,
} from "@components";
import { textVariant } from "@utils";
import styles from "@styles/contact.module.scss";

export default function Contact() {
  return (
    <main id="main" className="main">
      <Header />
      <MotionWrapper
        {...textVariant({})}
        className={styles.page_head_text_wrapper}
      >
        <h1 className={styles.page_header}>Contact</h1>
      </MotionWrapper>
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
