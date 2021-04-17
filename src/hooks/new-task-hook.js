import { useCallback, useReducer } from 'react'
const reducer = (state, action) => {
    if(action.type === 'RESET') return {text: '',start_date: new Date(),end_date: new Date(),color: '#cccccc',priority: 1,}
    if(action.type === 'SET_TASK') return action.task
    return {...state, [action.type.toLowerCase()] :action.value}
}
const validityReducer = (state, action) => {
    if(action.type === 'RESET') return {text : false, date : false, message : ''}
    if(action.type === 'VALID') return {text : true, date : true, message : ''}
    return {...state, [action.type] : action.value, message : action.message}
}

const newTaskDefault = {
        text: '',
        start_date: new Date(),
        end_date: new Date(),
        color: '#cccccc',
        priority: 1,
    }


const NewTaskHook = task => {
    const validityDefault = {
        text : task ? true : false,
        date : task ? true : false,
        message : ''
    }
    const [isInputValid, dispatchInputValidity] = useReducer(validityReducer,  validityDefault)
    
    const [data, dispatch] = useReducer(reducer, task || newTaskDefault)

    const setValue = (value, type) => {
        dispatch({ type: type, value: value })
        const valid = checkValidity(type, value)
        dispatchInputValidity({type : valid.type, value : valid.value, message : valid.message})
    }

    const setTask = useCallback(task =>{
        dispatch({type:'SET_TASK', task : task})
        dispatchInputValidity({type:'VALID'})
    },[])

    const resetForm = () =>{
        dispatch({type : 'RESET'})
        dispatchInputValidity({type : 'RESET'})
    }
    const inputSelected = ()=>{
        
    }
    const checkValidity = (type,value) =>{
        let message = ''
        if(type === 'START_DATE') {
            const valid =  new Date(value) < new Date(data.end_date)
            if(!valid) message = 'Task cannot start after it ends'
            return {type : 'date', value : valid, message : message}
        }
        if(type === 'END_DATE') {
            const valid =  new Date(value) > new Date(data.end_date)
            if(!valid) message = 'Task cannot ends before it starts'
            return {type : 'date', value : valid, message : message}
        }
        if(type === 'text') {
            const valid = value.length > 0
            if(!valid) message = 'Choose a name for your task'    
            return {type : 'text', value : valid, message : message}
        }
        return false
    }
   
    return {
        setValue: setValue,
        inputSelected: inputSelected,
        setTask : setTask,
        task: data,
        validText: isInputValid.text ,
        validDate : isInputValid.date,
        message: isInputValid.message,
        resetForm : resetForm
    }
}

export default NewTaskHook




