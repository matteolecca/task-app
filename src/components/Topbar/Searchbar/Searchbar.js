import React from 'react';
import classes from './Searchbar.module.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
const Searchbar = props => {
    return (
        <div className={classes.Searchbar} >
            <div className={classes.Searchinput}>
                <input onSelect={()=>props.search(true)} placeholder="Search"></input>
                <div className={classes.Iconcontainer}>
                    <SearchRoundedIcon style={{color : '#ffffff'}} />
                </div>
            </div>
        </div>
    );
};

export default Searchbar;