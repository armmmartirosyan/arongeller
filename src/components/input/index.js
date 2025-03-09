"use client";

import { useCallback, useId } from "react";
import styles from "./index.module.scss";

export function Input({
  label,
  name,
  placeholder,
  type = "text",
  inputClassName = "",
  wrapperClassName = "",
  validator,
  pattern,
  invalidMessage,
  ...rest
}) {
  const id = useId();

  const onInvalid = useCallback(
    (e) => {
      e.target.setCustomValidity(e.target.willValidate ? "" : invalidMessage);
    },
    [invalidMessage]
  );

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
        onInvalid={invalidMessage && onInvalid}
        pattern={pattern}
        {...rest}
      />
    </div>
  );
}
