import React from 'react';
import classes from './Spinner.module.css'
const Spinner = props => {
    const big = props.big ? classes.big : null
    const color = props.light ? classes.light : null

    return (
        <div className={[classes.Spinner, big, color].join(' ')}>
            {props.children}
        </div>
    );
};
export default Spinner;