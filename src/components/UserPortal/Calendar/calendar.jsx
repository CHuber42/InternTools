import React, { useState, useEffect } from 'react'
import buildCalendar from "./build";
import moment from 'moment';
import './styles.css';

// Tutorial: https://www.youtube.com/watch?v=5jRrVqRWqsM&ab_channel=devmentorlive

const background = {
  minHeight: '100vh',
  textAlign: 'center',
  background:  '#e5e5e5',
  padding: '1rem',
  marginLeft: '10rem'
}

export default function Calendar(){

  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {  
    setCalendar(buildCalendar(value));
  }, [value]);
 
  function isSelected(day, value){
    return value.isSame(day, "day");
  }

  function beforeToday(day){
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), 'day');
  }

  function dayStyles(day, value) {
    if (beforeToday(day)) return 'before';
    if (isSelected(day, value)) return 'selected';
    if (isToday(day)) return 'today';
    return "";
  }
  
  function currMonthName() {
    return value.format('MMMM')
  }
  
  function currYear(){
    return value.format("YYYY")
  }

  function prevMonth(){
    return value.clone().subtract(1, "month")
  }

  function nextMonth(){
    return value.clone().add(1, "month")
  }
  
  return(
      <>
          <div style={background}>
            <div className='calendar'>
              <div className="header">
          
                <div className="previous" onClick={() => setValue(prevMonth())}>{String.fromCharCode(171)}</div>

                <div className='current'>{currMonthName()} {currYear()}</div>
                
                <div className="next" onClick={() => setValue(nextMonth())}>{String.fromCharCode(187)}</div>
                
              </div>
                
              {/* <p style={{fontSize: '28px', fontFamily: 'Roboto', fontWeight: 'bold'}}> */}
              <div className="calendarMain">
                <div className='day-names'>
                  {
                    ['s', 'm', 't', 'w', 't', 'f', 's'].map((d) => (<div className="week">{d}</div>))
                  }
                </div>
                
                {calendar.map((week)=> (
                    <div>
                      {week.map(day => (
                          <div className='day' onClick={() => setValue(day)}>
                              <div className={dayStyles(day, value)}>
                                {day.format("D").toString()}
                              </div>
                          </div>
                        ))
                      }
                    </div>
                  ))}
              </div>
                
              {/* </p> */}
            </div>
        </div>
      </>
  )
}
