import boy from "../videos/boy.mp4";
import shoe from "../videos/shoe.mp4";
import cx from "classnames";
import * as images from "../images";
import {declOfNum} from "../helper";
import React from "react";
import './PreviewPerson.css'
import {useTranslation} from "react-i18next";


export function PreviewPerson({id, onClickFavorite, favorite, phrase, video, name, age, phone, image}) {
  const { t, i18n } = useTranslation()


  const thisVideo = () => {
    if(!video) {
      return null;
    }

    return video === "boy" ? boy : shoe;
  }

  return (
    <div className={cx(`preview-item--container`, {withVideo: Boolean(video)})}>
      <div className={"preview-item"} key={id}>
        <div className={cx(`preview-item--container--container`,{withoutVideo: Boolean(video)})}>
          <div className={"preview-item--name-container"}>
            <div className={'preview-item--name-container__img'}><img src={images[image]} /></div>
            <div className={'preview-item--name-container__name'}>{name}</div>
            <div><img onClick={onClickFavorite} src={images.star} style={favorite ? {opacity: '100%'} : {opacity: '50%'}}/></div>
          </div>
          <div>{i18n.language === "ru" ? declOfNum(age, ['год', 'года', 'лет']) : age + " " + t("person.age")}</div>
          <div>{phone}</div>
          <div>{phrase}</div>
        </div>
        {video && <div className={"preview-item--video-container"}>
          <video controls>
            <source src={thisVideo()} />
          </video>
        </div>}
      </div>
    </div>
  )
}