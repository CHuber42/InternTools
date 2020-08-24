import React, { useState, useRef } from 'react'
import './accordion.css';

const background = {
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px'
}


function Accordion(props) {
  
  const {setActive, setActiveState} = useState("");
  const {setHeight, setHeightState} = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(setActiveState === "active" ? "0px" : `${content.current.scrollHeight}px`);
      console.log(content.current.scrollHeight);
  }

  return(
    <>
    <div className='accordion_section'>
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion_title">{props.title}</p>
            <i style={{width: '10px', fill: '#777'}} class="fas fa-chevron-right"></i>
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



