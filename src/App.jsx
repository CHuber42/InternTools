import React from 'react';
import image from "./img/guf_logo.png";
import Footer from './components/footer.jsx';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      {/* Flask backend interaction */}
      {/* <p>My Token = {window.token}</p> */}
      <Footer />
    </>
  );
}

export default App;



