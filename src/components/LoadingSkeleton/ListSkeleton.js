import { Skeleton } from '@material-ui/lab';
import React from 'react';
import classes from './LoadingSkeleton.module.css'
const ListSkeleton = props => {
    const tasksPlaceholders = []
    if(props.count){
        for(let i = 0; i < props.count; i++){
            tasksPlaceholders.push(0)
        }
    }
    else{
        tasksPlaceholders.push(0)
    }
    
    return (
        <div className={classes.ListSkeleton}>
            {tasksPlaceholders.map((s, index) => {
                return (
                <div key={index} style={{height:props.height}} className={classes.ListSkeletonItem}>
                    <Skeleton />
                </div>)
            })}
        </div>
    );
};

export default ListSkeleton;