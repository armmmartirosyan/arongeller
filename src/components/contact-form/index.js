"use client";

import { motion } from "framer-motion";
import { zoomIn } from "@utils";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Textarea, toast } from "@components";
import { sendEmail } from "@actions";
import styles from "./index.module.scss";

export function ContactForm() {
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    const { message, success } = await sendEmail(formData);

    if (success) {
      formRef.current?.reset();
    }

    toast(message, success ? "success" : "error");
  };

  return (
    <motion.div
      className={styles.wrapper}
      {...zoomIn({
        delay: 0.1,
        duration: 1,
        once: true,
      })}
    >
      <form ref={formRef} action={handleSubmit} className={styles.form}>
        <Input
          type="text"
          name="name"
          required={true}
          label="Name"
          wrapperClassName={styles.input}
        />

        <Input
          type="email"
          name="email"
          required={true}
          label="Email"
          wrapperClassName={styles.input}
        />

        <Input
          type="text"
          name="phone"
          required={true}
          label="Phone number"
          wrapperClassName={styles.input}
          pattern="\+?\d{8,}"
          invalidMessage="Phone number must contain only an optional '+' mark and digits(at least 8)"
        />

        <Textarea
          name="message"
          required={true}
          label="Message"
          wrapperClassName={styles.input}
        />

        <Button className={styles.submit_button}>
          Send
          <FontAwesomeIcon icon={faEnvelope} className={styles.envelope} />
        </Button>
        <div className={styles.clear} />
      </form>
    </motion.div>
  );
}
