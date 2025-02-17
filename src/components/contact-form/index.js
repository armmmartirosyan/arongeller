"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Textarea } from "@components";
import { sendEmail } from "@actions";
import styles from "./index.module.scss";

export function ContactForm() {
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    const { message, success } = await sendEmail(formData);

    if (success) {
      formRef.current?.reset();
    }

    alert(message);
  };

  return (
    <div className={styles.wrapper}>
      <form ref={formRef} action={handleSubmit} className={styles.form}>
        <Input
          type="email"
          name="email"
          required={true}
          label="Email"
          wrapperClassName={styles.input}
          // placeholder="example@gmail.com"
        />

        <Textarea
          name="message"
          required={true}
          label="Message"
          wrapperClassName={styles.input}
          // placeholder="Feel free to reach to me"
        />

        <Button className={styles.submit_button}>
          Send
          <FontAwesomeIcon icon={faEnvelope} className={styles.envelope} />
        </Button>
        <div className={styles.clear} />
      </form>
    </div>
  );
}
