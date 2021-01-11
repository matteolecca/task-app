import React from 'react';
import classes from './CompletedStats.module.css'
import ShowChartIcon from '@material-ui/icons/ShowChart';

const Stat = props => {
    const color = props.completed ? classes.completed : classes.uncompleted
    return (
        <div className={[classes.StatsContainer, color].join(' ')}>
        <ShowChartIcon fontSize="large"  />
        <label className={classes.black}><strong>{props.count}+</strong></label>
        <div className={classes.StatusContainer}>
            <label className={classes.black}><strong>{props.status}</strong></label>
            <label>{props.percentage.toFixed(1)}%</label>
        </div>
    </div>
    );
};

export default Stat;