import React from 'react';
import classes from './Forminput.module.css'
const Forminput = props => {
    const last = props.last ? classes.last : null
    const first = props.first ? classes.first : null
    const invalid = !props.valid ? classes.invalid : null
    return (
        <div className={[classes.Forminput, invalid, first, last].join(' ')}>
            {props.children}
            <input
                defaultValue={props.value}
                onChange={e => props.onchange(e.target.value, props.type, props.ID)}
                type={props.type}
                placeholder={props.placeholder} />
        </div>
    );
};

export default Forminput;