import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {UserContextProvider} from "./userContext"

ReactDOM.render(
  <UserContextProvider value = {"brenda007"}>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);


