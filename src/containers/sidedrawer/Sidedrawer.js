import React from 'react';
import Buttonlist from './Buttonlist/Buttonlist';
import classes from './sidedrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import CloseIcon from '@material-ui/icons/Close';
import Transition from '../../components/Transition/transition';
import SwitchButtonContainer from '../../components/SwitchButton/SwitchButtonsContainer';

const Sidedrawer = props => {
        console.log('Sidedrawer rendered...')
        let opened = classes.closed
        const {  logo } = props
        if (props.opened) opened = classes.opened
        return (
                <Transition transition={props.opened}>
                        <React.Fragment>
                                <div className={[classes.Sidedrawer, opened].join(' ')}>
                                        <CloseIcon className={classes.closeIcon} onClick={props.clicked} />
                                        <div className={classes.Container}>
                                                <img
                                                        alt=""
                                                        className={classes.userIcon}
                                                        src={logo} />
                                        </div>
                                        <div>
                                                <Buttonlist closeMenu={props.clicked} />
                                                <div className={classes.container}>
                                                        <SwitchButtonContainer shadow />
                                                </div>
                                                {/* <Logoutview /> */}
                                        </div>
                                </div>
                                <Backdrop clicked={props.close} opened={props.opened} />
                        </React.Fragment>
                </Transition>
        );
};

export default Sidedrawer;