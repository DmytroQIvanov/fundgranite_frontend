import React, { useEffect, useState } from "react";
import styles from "./SearchPanel.module.scss";
import ReInput from "../ReComponents/Input";
import { useDebounce } from "../../Functions/Hooks/UseDebounce";

const SearchPanel = ({ onFilter }) => {
  const [filterState, setFilterState] = useState("");

  const debouncedValue = useDebounce(filterState, 200);
  useEffect(() => {
    onFilter && onFilter(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className={styles.searchPanel}>
      <div className={styles.searchPanel_container}>
        <input
          placeholder={"Введіть текст для пошуку..."}
          onChange={(event) => {
            setFilterState(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchPanel;
