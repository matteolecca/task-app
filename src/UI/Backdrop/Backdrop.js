import React from 'react';
import Transition from '../../components/Transition/transition';
import classes from './Backdrop.module.css'
const Backdrop = props => {
    const opened = props.opened ? classes.opened : classes.closed
    const fixedheight = props.fixedheight ? {top: props.fixedheight} : null
    return (
        <Transition
        transition={props.opened}
        >
        <div
        style={fixedheight}
            className={[classes.Backdrop, opened].join(' ')}
            onClick={props.clicked}>
                {props.children}
        </div>
        </Transition>
    )
}

export default Backdrop;