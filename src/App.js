import React from 'react';
import image from "./img/guf_logo.png";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import Navbar from './components/navbar';


function App() {
  return (
    <>
      <Navbar/>
      {/* Flask backend interaction */}
      {/* <p>My Token = {window.token}</p> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;



