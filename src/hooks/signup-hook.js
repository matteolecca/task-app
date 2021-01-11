import  {useCallback, useReducer} from 'react'
import {axiosFetch} from '../HTTP/http'
const reducer = (state, action) =>{
    switch (action.type) {
        case 'FETCHING' :
            return {...state, loading : true, error : null}
        case 'SUCCESS':
            return {...state, success : action.success,loading : false, error : null}
        case 'ERROR':
            return {...state, error : action.error, loading : false}
        default:
            return state
    }
}

const LoginHook = () =>{
    const [result, dispatch] = useReducer(reducer,{loading : false})
    
    const signup = useCallback( async( user) =>{
        dispatch({type:'FETCHING'})
        console.log("Signing up...")
        const result = await axiosFetch('http://localhost:8080/signup','POST', {email:user.email, password : user.password})
        if(result.data.error) dispatch({type:'ERROR', error : result.data.error})
        else {
            localStorage.setItem('token', result.data.token)
            dispatch({type:'SUCCESS', success : result.data})
        }
    },[])

    return{
        signup : signup,
        result : result,
        loading : result.loading
    }
}
export default LoginHook