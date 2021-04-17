import { Skeleton } from '@material-ui/lab';
import React from 'react';
import classes from './LoadingSkeleton.module.css'

const SingleTaskSkeleton = () => {
    return (
        <div className={classes.SingleTaskSkeleton}>
            <Skeleton height={30} width={200}/>
            <Skeleton height={15} width={145}/>
            <Skeleton variant="circle" width={150} height={150}/>

        </div>
    );
};

export default SingleTaskSkeleton;