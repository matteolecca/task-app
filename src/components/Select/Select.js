import React from 'react';
import classes from './Select.module.css'
import FormControl from '@material-ui/core/FormControl';
import SelectComponent from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const Select = props => {
  const options = [
    {key : 1, value : 1, subvalue : 1},
    {key : 2, value : 2, subvalue : 2},
    {key : 3, value : 3, subvalue : 3},
    {key : 4, value : 4, subvalue : 4},
    {key : 5, value : 5, subvalue : 5},
  ]

  const {  onchange, title } = props
  const size = props.halfwidth ? classes.halfwidth : null
  return (
    <div className={[classes.SelectContainer, size].join(' ')}>
        <FormControl variant="outlined" >
          <InputLabel >{props.title}</InputLabel>
          <SelectComponent
            value={props.value || "DEFAULT"}
            native
            label={props.title}
            onChange={(e) => onchange(e.target.value, props.ID)}
          >
            <option disabled value={"DEFAULT"} >{title}</option>
            { options ? options.map(o => <option  key={o.value} value={o.value}>{o.subvalue}</option>) : null}
          </SelectComponent>
        </FormControl>
     
    </div>
  );
};

export default Select;