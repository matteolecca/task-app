import React from 'react';
import classes from './UserPage.module.css'
import { connect } from 'react-redux';
import Logoutview from '../../components/Logout/Logoutview';
import logo from '../../images/app-logo.png'
import logoDark from '../../images/app-logo-dark.png'
import UserField from './UserField/UserField';
import HomeButton from '../../UI/HomeButton/HomeButton';


const UserPage = props => {
    const { style } = props

    return (
        <div className={[classes.UserPage]}>
            <HomeButton />
            <img alt="" src={style === 'light' ? logo : logoDark} />
            <div className={classes.UserDataContainer}>
                <h1>Update</h1>
                <UserField id="hoursperday" title="HPD" type="number" />
                <UserField id="password" title="Password" type="password" />
            </div >
            <div className={classes.LogoutContainer}>
                <Logoutview />
            </div>
        </div>
    );
};

const State = state => {
    return {
        style: state.appearenceReducer.style
    }
}

export default connect(State)(UserPage);