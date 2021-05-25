import React  from 'react';
import classes from './Priorityproject.module.css'
import ProgressBar from 'react-customizable-progressbar'
const Priorityproject = props => {
   const {title, progress, color} = props
    return (
        <div className={classes.Priorityproject}>
                <h4 style={{color : color}} className={classes.projectdesc}>{title}</h4>
                <ProgressBar
                    progress={progress}
                    radius={100}
                    strokeColor={color}>
                    <label className={classes.indicator}>{progress}%</label>
                </ProgressBar>
        </div>
    );
};


export default (Priorityproject);