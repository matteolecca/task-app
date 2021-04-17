import React from 'react';
import classes from './switchButtons.module.css'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux';
const SwitchButton = props => {
    const { setAppearence, appearenceStyle, type, children } = props
    const selected = appearenceStyle === type ? classes.selected : null
    
    return (
        <div onClick={() => setAppearence(type)} className={[classes.switchButton,selected].join(' ')}>
            {children}
            <span>{type}</span>
        </div>
    );
};

const State = state =>{
    return {
        appearenceStyle : state.appearenceReducer.style
    }
}

const Actions = dispatch =>{
    return {
        setAppearence : (style) => dispatch({type : actions.SET_APPEARENCE , style : style})
    }
}
export default connect(State,Actions) (SwitchButton);