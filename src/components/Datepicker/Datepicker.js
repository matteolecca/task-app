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
  const dateSelectedHandler = (date) => {
    props.onselect(date, props.ID)
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




// import 'date-fns';
// import React from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import classes from './Datepicker.module.css'
// const MaterialUIPickers = props => {
//   const [selectedDate, setSelectedDate] = React.useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//       <div className={classes.Datepicker}>
//           <label>{props.label}</label>
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <KeyboardDatePicker
//           className={props.type}
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           label=""
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//     </MuiPickersUtilsProvider>
//     </div>

//   );
// }
// export default MaterialUIPickers