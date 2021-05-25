import React, { useEffect, useState } from 'react';
import mode from './css/App.module.css';
import Login from './Update/Login/Login'
import { Switch, Route, Redirect } from 'react-router-dom'
import Signup from './Update/Signup/Signup';
import Main from './containers/Main/Main'
import Loadingpage from './components/Loadingpage/Loadingpage';
import { connect } from 'react-redux';
import * as actions from './redux/actions'
import UserPage from './containers/UserPage/UserPage';
import Topbar from './components/Topbar/Topbar';
import Popup from './components/Popup/Popup';
import ResetPwd from './Update/ResetPwd/ResetPwd';

function App(props) {
  const [menuOpened, openMenu] = useState(false)
  const {checkAuth, appearenceStyle, logged, checking} = props

  useEffect(() => {
    const backgroundColor = appearenceStyle === 'light' ? 'background-color : #ffffff;' : 'background-color : #333333;'
    document.body.style = backgroundColor
    if (!logged) {
      checkAuth()
    }
  }, [checkAuth, logged, appearenceStyle])
  

  return (
    <div className={mode[appearenceStyle]}>
      <Switch>
        <Route path="/login">
          {!checking ?
            (props.logged ? <Redirect to="/" /> : <Login auth={props.logged} />) :
            <Loadingpage />
          }
        </Route>
        <Route path="/signup">
          {!checking ?
            (props.logged ? <Redirect to="/" /> : <Signup />) :
            <Loadingpage />
          }
        </Route>
        <Route path="/resetpwd">
          {!checking ?
            (props.logged ? <Redirect to="/" /> : <ResetPwd />) :
            <Loadingpage />
          }
        </Route>
        <Route path="/account">
          {!checking ?
            (props.logged ? <UserPage /> : <Redirect to="/login" />) :
            <Loadingpage />
          }
         </Route>
        <Route path="/">
          {!checking ?
            props.logged ? 
            <React.Fragment>
              <Topbar clicked={openMenu}  />
              <Main  menuOpened={menuOpened} openMenu={openMenu} />
              </React.Fragment> : <Redirect to="/login" /> :
            <Loadingpage />
          }
        </Route>
      </Switch>
      <Popup />
    </div>
  )
}

const State = state => {
  return {
    logged: state.authReducer.logged,
    checking: state.authReducer.checking,
    appearenceStyle : state.appearenceReducer.style
  }
}

const Actions = dispatch => {
  return {
    checkAuth: () => dispatch({ type: actions.CHECK_AUTH })
  }
}
export default connect(State, Actions)(App);
