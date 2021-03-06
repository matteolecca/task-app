import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import classes from './Priorityproject.module.css'
const PrioritySkeleton = () => {
    return (
        <div style={{ maxWidth: '80%' }} >
            <Skeleton width={200} />
            <Skeleton width={50} />
            <div className={classes.circle}>
            </div>
        </div >
    );
};

export default PrioritySkeleton;