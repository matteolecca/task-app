import React from 'react';
import classes from './Spinner.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = props => {
    const big = props.big ? classes.big : null
    return <CircularProgress className={[classes.spinner, big].join(' ')}/>
};
export default Spinner;