import React  from 'react';
import classes from './Priorityproject.module.css'
import ProgressBar from 'react-customizable-progressbar'
const Priorityproject = props => {
   
    return (
        <div className={classes.Priorityproject}>
                <h2 className={classes.projectdesc}>{props.title}</h2>
                <div className={classes.projectdate}>{props.date}</div>
                <ProgressBar
                    progress={props.progress}
                    radius={100}
                    strokeColor={props.color}>
                    <label className={classes.indicator}>{props.progress}%</label>
                </ProgressBar>
        </div>
    );
};


export default (Priorityproject);