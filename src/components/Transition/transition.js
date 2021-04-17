import React, { useRef } from 'react';
import TransitionCSS from 'react-transition-group/CSSTransition';

import './transition.css'
const Transition = (props) => {
    const ref = useRef(null)
    return (
        <TransitionCSS
            nodeRef={ref}
            in={props.transition}
            timeout={500}
            mountOnEnter
            unmountOnExit
        >
            { state => <div ref={ref}>{props.children}</div>}
        </TransitionCSS >
    )
};

export default Transition;