import React from 'react';
import classes from './Titlebar.module.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Restartbutton from '../Itembutton/Restartbutton';
const Titlebar = props => {
    return (
        <div className={classes.Titlebar}>
            <div className={classes.row}>
            <h2 className={classes.Title}>Today's tasks</h2>
            <div className={classes.Barbuttoncontainer}>
                <button onClick={props.modalHandler}><AddCircleIcon /></button>
                <Restartbutton loading={props.loading} clicked={props.refresh}/>
            </div>
            </div>
           
            
        </div>
    );
};

export default Titlebar;

