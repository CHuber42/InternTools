import React, { useState, useRef } from 'react';
import './accordion.css';

const background = {
  boxSizing: 'border-box',
  margin: '0rem',
  padding: '0rem',
}

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0rem");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0rem" : `${content.current.scrollHeight}rem`);
  }

  return(
    <>
    <div style={background} className='accordion_section'>
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion_title">{props.title}</p>
        </button>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion_content">
            <div 
              className="accordion_text"
              dangerouslySetInnerHTML={{__html: props.content}} 
            />
            </div>      
    </div>
    </>
  )
}

export default Accordion;



