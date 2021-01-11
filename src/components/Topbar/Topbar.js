import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import classes from './Topbar.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Backdrop from '../../UI/Backdrop/Backdrop';
const Topbar = props => {
    const [searchClicked, searchClick] = useState(false)
    const handleSearch = () =>{
        searchClick(!searchClicked)
    }
    return (
        <React.Fragment>
        <div className={classes.Topbar}>
            <div className={classes.itemContainer}>
                <button onClick={props.clicked} className={classes.Burger}><MenuIcon /></button>
                <div className={classes.welcome}>
                    <div className={classes.welcomeMsg}>
                        Good morning, <strong>Matteo</strong>
                    </div>
                    <WbSunnyRoundedIcon/>
                </div>
                <Searchbar search={searchClick} />
            </div>
        </div>
        <Backdrop opened={searchClicked} clicked={handleSearch} fixedheight="10vh"/>
        </React.Fragment>
    );
};

export default Topbar;