import React from "react";
import classes from './Datepicker.module.css'
import "react-datepicker/dist/react-datepicker.css";
import { CalendarTodayRounded } from "@material-ui/icons";
import { SingleDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
import moment from 'moment'

const DatePickerContainer = props => {
  const last = props.last ? classes.last : null
  const color = props.type === 'start' ? 'green' : 'red'

  const dateHandler = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD')
    props.onchange(formattedDate, props.ID)
  }

  return (
    <div className={[classes.DatePickerContainer, last].join(' ')}>
      <div className={classes.title}>
        <CalendarTodayRounded style={{ color: color }} />
        <label>{props.label}</label>
      </div>
      <SingleDatePicker
        className={props.last ? 'last' : null}
        startDate={moment(props.date).format('YYYY-MM-DD')}
        onChange={(startDate) => dateHandler(startDate)}
        minDate={new Date()}
        maxDate={new Date(2100, 0, 1)}
        dateFormat="D-MM-YYYY"
        monthFormat="MMM YYYY"
        singleCalendar
        startDatePlaceholder="Start Date"
        disabled={props.disabled}
        startWeekDay="monday"
        
      />
    </div>

  );
};

export default DatePickerContainer



