import React, { useEffect, useState } from "react";
import styles from "./ReInput.module.scss";

const ReInput = ({ title, placeholder, type = "text" }) => {
  const [inputState, setInputState] = useState("");

  useEffect(() => {
    if (type === "number") {
      setInputState(0);
    }
  }, [type]);
  const onChange = (value) => {
    if (type === "number" && value < 0) {
      setInputState(0);
    } else {
      setInputState(value);
    }
  };
  return (
    <div className={styles.reInput}>
      <div className={styles.reInput_container}>
        <span
          className={`${styles.reInput_title}`}
          style={{ color: title.color }}
        >
          {title.text}:
        </span>
        <input
          type={type}
          className={styles.reInput_input}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={inputState}
        />
      </div>
    </div>
  );
};

export default ReInput;
