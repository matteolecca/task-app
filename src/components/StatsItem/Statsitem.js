import React from 'react';
import classes from'./Statsitem.module.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
const Statsitem = props => {
    const colorStyle = props.completed ? {color:'green'} : {color:'red'}
    const icon = props.completed ? 
    <TrendingUpIcon fontSize="large" style={colorStyle}/> :  <TrendingDownIcon fontSize="large"style={colorStyle}/> 
    const title = props.completed ? "Completed" : "Uncompleted"

    return (
        <div className={classes.Statsitem}>
                {icon}
                <div className={classes.completeNbr}>{props.nrtasks}</div>
                <div className={classes.completedStats}>
                    <div>{title}</div>
                    <div className={classes.percentage} style={colorStyle}>{props.perc}%</div>
                </div>
        </div>
    );
};

export default Statsitem;