import React from 'react';
import Buttonlist from './Buttonlist/Buttonlist';
import classes from './sidedrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import CloseIcon from '@material-ui/icons/Close';
import Transition from '../../components/Transition/transition';
import SwitchButtonContainer from '../../components/SwitchButton/SwitchButtonsContainer';
import Logoutview from '../../components/Logout/Logoutview';
import { connect } from 'react-redux';
import logo from '../../images/app-logo.png'
import logoDark from '../../images/app-logo-dark.png'
const Sidedrawer = props => {
        console.log('Sidedrawer rendered...')
        let opened = classes.closed
        const {  style } = props
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
                                                src={ style==='light' ? logo : logoDark } />
                                        </div>
                                        <div>
                                                <Buttonlist closeMenu={props.clicked} />
                                                <div className={classes.container}>
                                                        <SwitchButtonContainer shadow/>
                                                </div>
                                                <Logoutview />
                                        </div>
                                </div>
                                <Backdrop clicked={props.close} opened={props.opened} />
                        </React.Fragment>
                </Transition>
        );
};
const State = state => {
        return {
                style : state.appearenceReducer.style
        }
}
export default connect(State)(Sidedrawer);