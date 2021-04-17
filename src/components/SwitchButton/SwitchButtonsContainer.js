import React from 'react';
import classes from './switchButtons.module.css'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SwitchButton from './SwitchButton';

const SwitchButtonContainer = props => {
    const { shadow } = props
    const style = shadow ? classes.shadow  : null
    return (
        <div className={[classes.Switch, style].join(' ')}>
            <SwitchButton shadow type="light" >
                <Brightness7Icon />
            </SwitchButton>
            <SwitchButton shadow type="dark" >
                <Brightness4Icon />
            </SwitchButton>
        </div>
    );
};

export default  (SwitchButtonContainer);