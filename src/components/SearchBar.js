import React from "react";
import './SearchBar.css';
import {useTranslation} from "react-i18next";

export const SearchBar = ({ term, update}) => {
  const dataSearch = e => {
    update(e.target.value)
  };
  const { t } = useTranslation()
  return (
    <div className={"search-bar--container"}>
      <input className={"search-bar"}
        value={term}
        type="text"
        placeholder={t("searchBar.placeholder")}
        onChange={dataSearch}
      />
    </div>
  )


}