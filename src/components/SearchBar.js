import React from "react";
import './SearchBar.css';

export const SearchBar = ({ term, update}) => {
  const dataSearch = e => {
    update(e.target.value)
  };
  return (
    <div className={"search-bar--container"}>
      <input className={"search-bar"}
        value={term}
        type="text"
        placeholder={"Поиск по имени..."}
        onChange={dataSearch}
      />
    </div>
  )


}