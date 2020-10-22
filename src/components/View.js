import React from 'react';
import './View.css';

function View({ view, setView }) {

  return (
    <div  className={'view'}>
      <div>Вид</div>
      <div className={'view--type'}>
        <button onClick={() => setView("table")} disabled={view === "table"}>Таблица</button>
        <button onClick={() => setView("preview")} disabled={view === "preview"}>Превью</button>
      </div>
    </div>
  )
}

export default View