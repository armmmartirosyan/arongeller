"use client";

import { useFormStatus } from "react-dom";
import { Loading } from "@components";
import styles from "./index.module.scss";

export function Button({ className = "", children, disabled, onClick }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {pending ? <Loading /> : children}
    </button>
  );
}
