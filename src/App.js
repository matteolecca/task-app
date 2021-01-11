import React, { useEffect  } from 'react';
import './App.css';
import Login from './containers/AuthForm/Loginform'
import { Switch, Route, Redirect } from 'react-router-dom'
import Signup from './containers/AuthForm/Signupform';
import LoginContext from './hooks/login-hook'
import Main from './containers/Main/Main'
import Loadingpage from './components/Loadingpage/Loadingpage';


function App(props) {
  const { checkauth, checkingAuth, auth, login, logout } = LoginContext()
  useEffect(()=>{
    if(!auth ){
      checkauth()
    }
  },[checkauth,auth])

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
        {!checkingAuth ? 
         (auth ?  <Redirect to="/"/> : <Login login={login} auth={auth}/>) : 
         <Loadingpage/>
          }
        </Route>
        <Route path="/signup">
        {!checkingAuth ? 
         (auth ?  <Main logout={logout}/> : <Signup/>) : 
         <Loadingpage/>
          }
        </Route>
        <Route path="/">
          {!checkingAuth ? 
         (auth ?  <Main logout={logout} /> : <Redirect to="/login"/>) : 
         <Loadingpage/>
          }
        </Route>
      </Switch>
    </div>
  )
}

export default App;
