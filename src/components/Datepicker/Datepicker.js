import React, { useState } from "react";
import DatePicker from "react-datepicker";
import classes from './Datepicker.module.css'
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [opened, openDate] = useState(false);
  const dateType = props.type === 'start' ? classes.start : classes.end
  const last = props.last ? classes.last : null

  const dateHandler = (date) => {
    props.onchange(date, props.ID)
    setStartDate(date)
  }

  return (
    <div onClick={() => openDate(!opened)} className={[classes.Datepicker, dateType, last].join(' ')}>
      <div className={classes.inputContainer}>
        <label>{props.placeholder}</label>
        <DatePicker onSelect={(e)=>props.onselect(e)} selected={startDate} onChange={date => dateHandler(date)} />
      </div>
      {props.children}
    </div>
  );
};

export default Example



