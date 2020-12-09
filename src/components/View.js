import React from 'react';
import './View.css';
import { useTranslation} from "react-i18next";


function View({ view, changeView }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation()

 const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div  className={'view'}>
      <div className={'view__header-container'}>
        <div>{t("view.title")}</div>
        <div className={'view__change-language'}>
          <button onClick={() => changeLanguage("en")}>en</button>
          <button onClick={() => changeLanguage("ru")}>ру</button>
        </div>
      </div>
      <div className={'view--type'}>
        <button onClick={() => changeView("table")} disabled={view === "table"}>{t("view.table")}</button>
        <button onClick={() => changeView("preview")} disabled={view === "preview"}>{t("view.preview")}</button>
      </div>
    </div>
  )
}

export default View