import React from 'react';
import classes from './Spinner.module.css'
const Spinner = props => {
    const big = props.big ? classes.big : null
    return (
        <div className={[classes.Spinner, big].join(' ')}>
            {props.children}
        </div>
    );
};
export default Spinner;