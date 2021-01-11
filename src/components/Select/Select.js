import React from 'react';
import classes from './Select.module.css'
const PRIORITY = [1,2,3,4,5]
const Select = props => {
    return (
        <div className={classes.Select}>
            <div>Priority</div>
            <select 
            onSelect={(e)=>props.onselect(e.target.value, props.ID)} 
            onChange={(e) => props.onchange(e.target.value, props.ID)}> 
            {PRIORITY.map(p =>{
                return <option  key={p}>{p}</option>
            })}
            </select>
        </div>
    );
};

export default Select;