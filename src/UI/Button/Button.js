import React  from 'react';
import classes from './Button.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const Button = props => {
    const {  onclick, big, fullwidth } = props
    const centered = props.centered ? classes.centered : null
    const color = props.color ? classes[props.color] : null
    const size = big ? classes.big : fullwidth ? classes.fullwidth : null
    // const [lazy, setLazy] = useState(false)
    const content = props.loading  ? <CircularProgress  className={classes.Spinner} /> : props.children

    return (
        <button disabled={props.disabled} onClick={ onclick } className={[classes.Button, centered, color,size].join(' ')}> {content}</button>
    )
}


export default Button;




// import React, { useState } from 'react';
// import classes from './Button.module.css'
// import Spinner from '../../UI/Spinner/Spinner'

// const Button = props => {
//     const { onclick } = props
//     const [ animation, animate ] = useState(false)
//     let color = props.color ? classes[props.color] : null
//     const fullwidth = props.fullwidth ? classes.fullwidth : null
//     const children = props.loading || animation ? <Spinner /> : props.children
//     const disabled = props.disabled ? classes.disabled : null

//     const clickHandler = e =>{
//         e.preventDefault()
//         animate(true)
//         setTimeout(() => {
//             if(onclick) onclick() 
//             animate(false)
//         }, 500);
//     }
//     return (
//         <button onClick={(e)=>clickHandler(e)} disabled={props.disabled}  className={[classes.Button, disabled, color,fullwidth].join(' ')}>
//             <div className={classes.messageContainer}>{children}</div >
//         </button>
//     );
// };

// export default Button;