import React, {  } from 'react';
import Button from './Button/Button'
import classes from './Buttonlist.module.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import * as actions from '../../../redux/actions'
import * as context from '../../../redux/context'
import { connect } from 'react-redux';
import { useHistory } from "react-router";

const Buttonlist = props => {
    const history = useHistory();
    const handleContext = (context)=>{
        props.setContext(context)
        props.closeMenu()
    }

    const NavigateTo = () =>{
        history.push('/account')
    }
    return (
        <div className={classes.Buttonlist}>
            <Button clicked={handleContext} to={context.ACTIVE_TASKS_LIST} text="Daily Routine"><HomeRoundedIcon/></Button>
            <Button clicked={handleContext} to={context.ACTIVE_TASKS} text="Active Tasks"><GroupRoundedIcon/></Button>
            <Button clicked={handleContext} to={context.TASKS_LIST} text="Tasks List"><MessageRoundedIcon/></Button>
            <Button clicked={NavigateTo} text="Account"><UserIcon/></Button>
        </div>
    );
};


const Actions = dispatch =>{
    return {
        setContext : (context)=> dispatch({type: actions.SET_CONTEXT, context : context})
    }
}

export default connect(null, Actions) (Buttonlist);