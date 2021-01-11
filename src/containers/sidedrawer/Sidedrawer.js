import React from 'react';
import Buttonlist from './Buttonlist/Buttonlist';
import classes from './sidedrawer.module.css'
import Userinfo from './Userinfo/Userinfo';
import Backdrop from '../../UI/Backdrop/Backdrop'
import CloseIcon from '@material-ui/icons/Close';
import Transition from '../../components/Transition/transition';
const Sidedrawer = props => {
        console.log('Sidedrawer rendered...')
        let opened = classes.closed
        if(props.opened) opened = classes.opened
        return (
                <Transition transition={props.opened}>
                <React.Fragment>
                        <div className={[classes.Sidedrawer, opened].join(' ')}>
                                <div className={classes.closeButton} onClick={props.clicked}>
                                        <CloseIcon  />
                                </div>
                                <Userinfo />
                                <Buttonlist closeMenu={props.clicked} />
                        </div>
                        <Backdrop clicked={props.close} opened={props.opened} />
                </React.Fragment>
                </Transition>
        );
};

export default Sidedrawer;