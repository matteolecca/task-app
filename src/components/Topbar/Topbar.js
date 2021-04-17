import React, { useEffect, useState } from 'react';
import classes from './Topbar.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { NavLink } from 'react-router-dom';
import UserIconGenerator from '../UserIconGenerator/UserIconGenerator';
import { connect } from 'react-redux';
const MESSAGE = {
    morning: {
        message: 'morning',
        icon : <WbSunnyRoundedIcon />,
    },
    evening:{
        message : 'evening',
        icon : <WbSunnyRoundedIcon/>,
    },
    afternoon :{
        message : 'afternoon',
        icon : <WbSunnyRoundedIcon/>,
    },
    night : {
        message : 'night',
        icon : <NightsStayIcon/>,
    }
}
const Topbar = props => {
    const [searchClicked, searchClick] = useState(false)
    const [message, setMessage] = useState(MESSAGE.morning)
    const {userName} = props
    const handleSearch = () => {
        searchClick(!searchClicked)
    }
    useEffect(() => {
        const date = new Date().getHours()
        if (date > 11) setMessage(MESSAGE.afternoon)
        if (date > 16) setMessage(MESSAGE.evening)
        if (date > 20) setMessage(MESSAGE.night)
    }, [])
    return (
        <React.Fragment>
            <div className={classes.Topbar}>
                <div className={classes.itemContainer}>
                   <MenuIcon className={classes.Burger} onClick={()=>props.clicked(true)}/>
                    <div className={classes.welcome}>
                        <div className={classes.welcomeMsg}>
                            Good {message.message}, <strong>{userName ? userName.split(' ')[0] : null}</strong>
                        </div>
                        {message.icon}
                    </div>
                    <NavLink className={classes.UserLink} to="/account"><UserIconGenerator/></NavLink>
                    {/* <img alt="" className={classes.UserButton} src="icon.jpg"/> */}
                </div>
            </div>
            <Backdrop opened={searchClicked} clicked={handleSearch} fixedheight="10vh" />
        </React.Fragment>
    );
};
const State = state =>{
    return {
        userName : state.authReducer.user.name
    }
}
export default connect(State) (Topbar);