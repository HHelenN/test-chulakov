import * as images from "../images";
import {declOfNum} from "../helper";
import React from "react";
import './TablePerson.css'
import {useTranslation} from "react-i18next";

export function TablePerson({id, name, age, phone, image, onClickFavorite, favorite}) {
  const { t, i18n } = useTranslation();

  return (
    <div className={"table-item"} key={id}>
      <div className={"table-item--name-container"}>
        <div className={"table-item--name-container__img"}><img src={images[image]} /></div>
        <div>{name}</div>
      </div>
      <div>{i18n.language === "ru" ? declOfNum(age, ['год', 'года', 'лет']) : age + " " + t("person.age")}</div>
      <div>{phone}</div>
      <div><img onClick={onClickFavorite} src={images.star} style={{opacity: favorite ? '100%' : '50%'}}/></div>
    </div>
  )
}