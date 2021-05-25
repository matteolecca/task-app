import 'date-fns';
import React, { createRef,  } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment'

const MaterialUIPickers =  (props) => {
  const myRef = createRef(null)
    const last = props.last ? 'last' : null

  const dateHandler = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD')
    props.onchange(formattedDate, props.ID)
  }

  return (
      <div ref={myRef} className={["datepicker-matteo", last].join(' ')}>
          <label>{props.placeholder}</label>
    <MuiPickersUtilsProvider nodeRef={myRef} utils={DateFnsUtils}>
      
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-matteo"
          label=""
          format="MM/dd/yyyy"
          value={props.date}
          onChange={dateHandler}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
    </MuiPickersUtilsProvider>
    
</div>
  );
}

export default MaterialUIPickers
