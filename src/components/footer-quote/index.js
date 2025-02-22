import { TextFade } from "@components";
import styles from "./index.module.scss";

export function FooterQuote({
  text = '"The best way to predict the future is to design it."',
  author = "- Buckminster Fuller",
}) {
  return (
    <div className={styles.footer_quote_container}>
      <div className={styles.footer_quote_wrapper}>
        <p className={styles.footer_quote}>{text}</p>
        <TextFade className={styles.footer_quote_author}>{author}</TextFade>
      </div>
    </div>
  );
}
