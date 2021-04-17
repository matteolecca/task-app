import React from 'react';
import TextField from '@material-ui/core/TextField';
const Input = props => {
  return (
    <TextField
      value={props.value}
      onChange={(e) => props.onchange(props.id, e.target.value)}
      error={!props.valid}
      label={props.placeholder}
      variant="outlined"
      type={props.type}
      id={props.placeholder}
      inputProps={props.pattern ? { pattern: "\\d*" } : {}}
    />
  );
};

export default Input;