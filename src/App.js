import React from 'react';
import './App.css';
import Sorting from "./components/Sorting";
import View from "./components/View";
import List from "./components/List";
import {useDispatch, useSelector} from "react-redux";
import { changeDirectionAction, changeTypeAction, changeViewAction } from "./reducers/list";



function App() {

  const dispatch = useDispatch()

  const changeDirection = (direction) => dispatch(changeDirectionAction(direction))
  const changeType = (type) => dispatch(changeTypeAction(type))
  const changeView = (view) => dispatch(changeViewAction(view))

  const { type, direction, view } = useSelector(state => state.list)

  return (
    <div className={'App-container'}>
      <div className="App">
        <div className="App--header">
          <Sorting direction={direction} type={type} changeDirection={changeDirection} changeType={changeType}/>
          <View view={view} changeView={changeView} />
        </div>
        <div className="App--content">
          <List view={view} direction={direction} type={type}/>
        </div>
      </div>
    </div>
  );
}

export default App;

