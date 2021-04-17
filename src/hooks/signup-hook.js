import { useCallback, useMemo, useReducer, useState } from 'react'
import { validateInput } from '../helper/inputValidator'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state, [action.valueID]: {
                    value: action.value,
                    valid: action.valid
                }
            }
        case 'SET_VALIDITY':
            return { ...state, valid: action.valid }
        default:
            return state
    }
}

const LoginHook = () => {
    const formValues = useMemo(()=>{
        return {
        valid: false,
        name: {
            valid: false,
            value: '',
            message : 'Insert your name'
        },
        email: {
            valid: false,
            value: '',
            message : 'Insert a valid email'

        },
        password: {
            valid: false,
            value: '',
            message : 'Password should contain letters, numbers and 6 characters'

        },
        repeatedpassword: {
            valid: false,
            value: '',
            message : 'Passwords should match'
        }
    }},[])
    const [form, dispatch] = useReducer(reducer, formValues)
    const [errorMessage, setErrorMessage] = useState('')

    const setValue = useCallback((value, type, ID) => {
        const valid = validateInput(value, type)
        if(!valid) setErrorMessage(formValues[ID].message)
        else setErrorMessage('')
        dispatch({ type: 'SET_VALUE', valueID: ID, value: value, valid: valid })
    }, [formValues])

    return {
        valid: form.name.valid &&
            form.email.valid &&
            form.password.valid &&
            (form.password.value === form.repeatedpassword.value)
        ,
        form : form,
        setValue: setValue,
        errorMessage : errorMessage
    }
}
export default LoginHook