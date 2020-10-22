import React from 'react';
import './Sorting.css'



function Sorting() {
  return (
    <div className={'sorting'}>
      <div className={'sorting--h'}>Сортировка</div>
      <div className={'sorting--type'}>
        <button >ID</button>
        <button>Имя</button>
        <button>Возраст</button>
      </div>
      <div className={'sorting--order'}>
        <button onClick={Asecending}>По возрастанию</button>
        <button onClick={Desecending}>По убыванию</button>
      </div>
    </div>
  )
}

export default Sorting