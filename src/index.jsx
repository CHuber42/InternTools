import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Redirect } from 'react-router-dom';

require('typeface-rhodium-libre');

function redirect(destination){
  if (destination === ""){
    window.history.pushState(null, null, "/")
  }
  else {
    const newUrl = "/" + destination;
    window.history.pushState(null, null, newUrl)
  }
}

redirect(window.rerouteData)

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App userData={window.userData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
