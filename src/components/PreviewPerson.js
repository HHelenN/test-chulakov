import boy from "../videos/boy.mp4";
import shoe from "../videos/shoe.mp4";
import cx from "classnames";
import * as images from "../images";
import {declOfNum} from "../helper";
import React from "react";
import './PreviewPerson.css'

export function PreviewPerson({id, favourite, phrase, video, name, age, phone, image}) {

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
            <div><img src={images.star} style={favourite ? {opacity: '100%'} : {opacity: '50%'}}/></div>
          </div>
          <div>{declOfNum(age, ['год', 'года', 'лет'])}</div>
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