import React from 'react';
import cx from "classnames";
import './Sorting.css'
import { useTranslation } from "react-i18next";


function Sorting({ changeType, changeDirection, direction, type }) {

  const { t } = useTranslation()

  return (
    <div className={'sorting'}>
      <div className={'sorting--h'}>{t("sorting.title")}</div>
      <div className={'sorting--type'}>
        <button onClick={() => changeType("id")} className={cx({ active: type === "id"})}>ID</button>
        <button onClick={() => changeType("name")} className={cx({ active: type === "name"})}>{t("sorting.name")}</button>
        <button onClick={() => changeType("age")} className={cx({ active: type === "age"})}>{t("sorting.age")}</button>
      </div>
      <div className={'sorting--order'}>
        <button onClick={() => changeDirection("asc")} className={cx({ active: direction === "asc"})}>{t("sorting.asc")}</button>
        <button onClick={() => changeDirection("desc")} className={cx({ active: direction === "desc"})}>{t("sorting.desc")}</button>
      </div>
    </div>
  )
}

export default Sorting