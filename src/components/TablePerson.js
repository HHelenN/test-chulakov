import * as images from "../images";
import {declOfNum} from "../helper";
import React from "react";
import './TablePerson.css'

export function TablePerson({id, favourite, name, age, phone, image}) {
  return (
    <div className={"table-item"} key={id}>
      <div className={"table-item--name-container"}>
        <div className={"table-item--name-container__img"}><img src={images[image]} /></div>
        <div>{name}</div>
      </div>
      <div>{declOfNum(age, ['год', 'года', 'лет'])}</div>
      <div>{phone}</div>
      <div><img src={images.star} style={{opacity: favourite ? '100%' : '50%'}}/></div>
    </div>
  )
}