import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from "react-redux"
import { stringify } from "query-string";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from "./store";
import { history } from "./history";

import './i18n';

store.subscribe(() => {
  const state = store.getState()
  const stateUrl = stringify(state.list)
  history.replace(`/?${stateUrl}`)
})

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
