import React from 'react';
import { connect } from 'react-redux';
const UserIconGenerator = props => {
    const {userName} = props
    return (
            <span style={{textTransform : 'uppercase'}}>{userName.slice(0,1)}</span>
    );
};

const State = state =>{
    return {
        userName : state.authReducer.user.name
    }
}
export default connect(State) (UserIconGenerator);