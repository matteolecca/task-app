import React, {  } from 'react';
import { connect } from 'react-redux';
import classes from'./Button.module.css'
const Button = props => {
   
    const isSelected = props.context === props.to ? classes.selected : null 
   return(
       <div onClick={()=>props.clicked(props.to)} className={[classes.Button, isSelected].join(' ')}>
           {props.children}
           <div className={classes.Buttonname}>{props.text}</div>
           </div>
   )
};

const State = state => {
    return {
        context: state.contextReducer.context
    }
}

export default connect(State)(Button);