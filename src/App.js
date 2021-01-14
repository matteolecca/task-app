import React, { useEffect  } from 'react';
import './App.css';
import Login from './containers/AuthForm/Loginform'
import { Switch, Route, Redirect } from 'react-router-dom'
import Signup from './containers/AuthForm/Signupform';
import LoginContext from './hooks/login-hook'
import Main from './containers/Main/Main'
import Loadingpage from './components/Loadingpage/Loadingpage';
import { connect } from 'react-redux';
import * as actions from './redux/actions'

function App(props) {
  const { checkauth, checkingAuth, auth, login, logout } = LoginContext()

  const checkAuthoriz = props.checkAuth
  const logged = props.logged
  useEffect(()=>{
    if(!logged ){
      checkAuthoriz()
    }
  },[checkAuthoriz,logged])

  console.log("TOKEN EXPIRED", props.logged)
  console.log("LOADING", props.checking)

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
        {!props.checking ? 
         (props.logged ?  <Redirect to="/"/> : <Login auth={props.logged}/>) : 
         <Loadingpage/>
          }
        </Route>
        <Route path="/signup">
        {!props.checking ? 
         (props.logged ?  <Main logout={logout}/> : <Signup/>) : 
         <Loadingpage/>
          }
        </Route>
        <Route path="/">
          {!props.checking ? 
         (props.logged ?  <Main logout={logout} /> : <Redirect to="/login"/>) : 
         <Loadingpage/>
          }
        </Route>
      </Switch>
    </div>
  )
}

const State = state =>{
  return {
    logged : state.authReducer.logged,
    checking : state.authReducer.checking,
  }
}

const Actions = dispatch =>{
  return{
    checkAuth : ()=>dispatch({type : actions.CHECK_AUTH })
  }
}
export default connect(State, Actions)(App);
