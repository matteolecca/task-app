import { Skeleton } from '@material-ui/lab';
import React from 'react';
import classes from './LoadingSkeleton.module.css'

const ColumnsSkeleton = () => {
    return (
        <div className={classes.ColumnSkeleton}>
            {[1,2,3].map(s => {
                return (
                <div key={s} className={classes.ColumnSkeletonItem}>
                    <Skeleton />
                </div>)
            })}

        </div>
    );
};

export default ColumnsSkeleton;