import React from 'react';
import classes from './UserPage.module.css'
import { connect } from 'react-redux';
import logo from '../../images/app-logo.png'
import logoDark from '../../images/app-logo-dark.png'
import UserField from './UserField/UserField';
import HomeButton from '../../UI/HomeButton/HomeButton';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
const UserPage = props => {
    const { style, user } = props

    return (
        <div className={classes.UserPage}>
            <HomeButton />
            <img alt="" src={style === 'light' ? logo : logoDark} />
            <div className={classes.UserDatas}>
                <div className={classes.UserDataContainer}>
                    <h1>Your data</h1>
                    <div className={classes.UserData}>
                        <PersonIcon />
                        <h4>{user.name}</h4>
                    </div>
                    <div className={classes.UserData}>
                        <EmailOutlinedIcon />
                        <h4>{user.email}</h4>
                    </div>
                </div>
                <div className={classes.UserDataContainer}>
                    <h1>Update</h1>
                    <UserField id="hoursperday" title="HPD" type="number" />
                    <UserField id="password" title="Password" type="password" />
                </div >
            </div>
        </div>
    );
};

const State = state => {
    return {
        style: state.appearenceReducer.style,
        user: state.authReducer.user
    }
}

export default connect(State)(UserPage);