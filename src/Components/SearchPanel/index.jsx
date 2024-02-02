import React, { useEffect, useState } from "react";
import styles from "./SearchPanel.module.scss";
import ReInput from "../ReComponents/Input";
import { useDebounce } from "../../Functions/Hooks/UseDebounce";
import { ReactComponent as CrossSVG } from "../../Assets/cross-23.svg";
import { useTranslation } from "react-i18next";

const SearchPanel = ({ onFilter }) => {
  const [filterState, setFilterState] = useState("");
  const { t } = useTranslation();

  const debouncedValue = useDebounce(filterState, 200);
  useEffect(() => {
    onFilter && onFilter(debouncedValue);
  }, [debouncedValue]);

  const onCrossClick = () => {
    setFilterState("");
  };
  return (
    <div className={styles.searchPanel}>
      <div className={styles.searchPanel_container}>
        <input
          placeholder={t("activity.searchInputPlaceholder")}
          onChange={(event) => {
            setFilterState(event.target.value);
          }}
          value={filterState}
        />
        <div
          onClick={() => {
            onCrossClick();
          }}
          style={{ display: "flex", cursor: "pointer" }}
        >
          <CrossSVG
            style={{ fill: "white" }}
            color={"white"}
            // className={styles.searchPanel_cross}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
