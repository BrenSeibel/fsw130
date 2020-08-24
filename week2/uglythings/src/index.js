import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import UserContext from "./userContext"

ReactDOM.render(
  <UserContext.Provider value = {"brenda007"}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);


