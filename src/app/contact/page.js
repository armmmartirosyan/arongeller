import { Header, Footer, ContactForm } from "@components";
import styles from "@styles/contact.module.scss";

export default function Contact() {
  return (
    <main className="main">
      <Header />
      <div className={styles.page_head_text_wrapper}>
        <h1 className={styles.page_header}>Contact</h1>
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
