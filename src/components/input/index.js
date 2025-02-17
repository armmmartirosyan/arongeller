"use client";

import { useId } from "react";
import styles from "./index.module.scss";

export function Input({
  label,
  name,
  placeholder,
  type = "text",
  inputClassName = "",
  wrapperClassName = "",
  ...rest
}) {
  const id = useId();

  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${inputClassName} ${styles.input}`}
        {...rest}
      />
    </div>
  );
}
