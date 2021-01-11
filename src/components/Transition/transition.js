import React from 'react';
import TransitionCSS from 'react-transition-group/CSSTransition';

import './transition.css'
const Transition = (props) => {
    return (
        <TransitionCSS
            in={props.transition}
            timeout={500}
            mountOnEnter
            unmountOnExit
            classNames="slide">
            {state => props.children}
        </TransitionCSS>
    )
};

export default Transition;