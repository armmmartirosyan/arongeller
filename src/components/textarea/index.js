"use client";

import { useId } from "react";
import styles from "./index.module.scss";

export function Textarea({
  label,
  name,
  placeholder,
  wrapperClassName = "",
  textareaClassName = "",
  ...rest
}) {
  const id = useId();

  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={`${textareaClassName} ${styles.textarea}`}
        {...rest}
      />
    </div>
  );
}
