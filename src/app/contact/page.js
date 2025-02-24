import {
  Header,
  Footer,
  ContactForm,
  ScrollToTop,
  MotionWrapper,
} from "@components";
import { textVariant } from "@utils";
import "@styles/contact.scss";

export default function Contact() {
  return (
    <main className="main">
      <Header />
      <MotionWrapper {...textVariant()} className="page_head_text_wrapper">
        <h1 className="page_header">Contact</h1>
      </MotionWrapper>
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
