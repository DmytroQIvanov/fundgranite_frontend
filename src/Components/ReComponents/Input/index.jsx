import React, { useEffect, useState } from "react";
import styles from "./ReInput.module.scss";

const ReInput = ({
  title,
  placeholder,
  type = "text",
  height,
  defaultValue,
  maxLength,
}) => {
  const [inputState, setInputState] = useState(defaultValue);

  useEffect(() => {
    if (type === "number") {
      setInputState();
    }
  }, [type]);
  const onChange = (value) => {
    if (value.length > maxLength) {
      return;
    }
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
          style={{ color: title?.color ?? "black" }}
        >
          {title?.text}:
        </span>
        {type == "textarea" ? (
          <textarea
            className={styles.reInput_textarea}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            className={styles.reInput_input}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={inputState}
          />
        )}
      </div>
    </div>
  );
};

export default ReInput;
