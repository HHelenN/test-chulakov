import React, {useState} from 'react';
import './App.css';
import Sorting from "./components/Sorting";
import View from "./components/View";
import List from "./components/List";


function App() {
  const [view, setView] = useState("table")

  return (
    <div className={'App-container'}>
      <div className="App">
        <div className="App--header">
          <Sorting />
          <View view={view} setView={setView}/>
        </div>
        <div className="App--content">
          <List view={view} />
        </div>
      </div>
    </div>
  );
}

export default App;

