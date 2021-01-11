import React from 'react';
import classes from './Restartbutton.module.css'
import RestartIcon from '@material-ui/icons/RotateLeft';

const Restartbutton = props => {
    const rotateanimation = props.loading ? classes.rotate : null
    const rotationHandler = () =>{
        props.clicked()
    }
    return (
        <button onClick={rotationHandler} className={classes.Restartbutton}>
            <RestartIcon  className={[classes.icon, rotateanimation].join(' ')}/>
        </button>
    );
};

export default Restartbutton;