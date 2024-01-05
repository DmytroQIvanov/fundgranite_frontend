import React, { useEffect, useState } from "react";
import styles from "./ReSelect.module.scss";

const ReSelect = ({ array, value, onChange, customStyle }) => {
  const [selectedState, setSelectedState] = useState();
  const onSelect = (value) => {
    setSelectedState(value);
    onChange(value);
  };
  useEffect(() => {
    setSelectedState(value);
  }, [value]);
  return (
    <div className={styles.customSelect} style={customStyle}>
      <select
        value={selectedState}
        onChange={(event) => onSelect(event.target.value)}
      >
        {array?.map(({ code, label }) => (
          <option
            key={code}
            value={code}
            className={`${styles.selectItems} ${
              selectedState === code ? styles.selectSelected : ""
            }`}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReSelect;
