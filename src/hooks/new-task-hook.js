import { useReducer } from 'react'
const reducer = (state, action) => {
    if(action.type === 'RESET') return {text: '',start_date: new Date(),end_date: new Date(),color: '#cccccc',priority: 1,}
    return {...state, [action.type.toLowerCase()] :action.value}
}
const validityReducer = (state, action) => {
    return {...state, [action.type] : action.value, message : action.message}
}


const NewTaskHook = () => {
    const [isInputValid, dispatchInputValidity] = useReducer(validityReducer, {
        text : false,
        date : false,
        message : ''
    })
    const [data, dispatch] = useReducer(reducer, {
        text: '',
        start_date: new Date(),
        end_date: new Date(),
        color: '#cccccc',
        priority: 1,
    })

    const setValue = (value, type) => {
        dispatch({ type: type, value: value })
        const valid = checkValidity(type, value)
        dispatchInputValidity({type : valid.type, value : valid.value, message : valid.message})
    }

    const resetForm = () =>{
        dispatch({type : 'RESET'})
    }
    const inputSelected = ()=>{
        
    }
    const checkValidity = (type,value) =>{
        let message = ''
        if(type === 'START_DATE') {
            const valid =  new Date(value) <= new Date(data.end_date)
            if(!valid) message = 'Task cannot start after it ends'
            return {type : 'date', value : valid, message : message}
        }
        if(type === 'END_DATE') {
            const valid =  new Date(value) >= new Date(data.end_date)
            if(!valid) message = 'Task cannot ends before it starts'
            return {type : 'date', value : valid, message : message}
        }
        if(type === 'TEXT') {
            const valid = value.length > 0
            if(!valid) message = 'Choose a name for your task'    
            return {type : 'text', value : valid, message : message}}
        return false
    }
   
    return {
        setValue: setValue,
        inputSelected: inputSelected,
        task: data,
        valid: isInputValid.text && isInputValid.date,
        message: isInputValid.message,
        resetForm : resetForm
    }
}

export default NewTaskHook




