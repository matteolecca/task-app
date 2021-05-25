import React from 'react';
import Input from '../Input/Input';
import classes from './Form.module.css'
import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import Select from '../Select/Select';

const Form = props => {
    const { onsubmit, errorMessage, inputs, keys, links, loading, setValue, submitTitle,  } = props
    return (
        <form onSubmit={onsubmit} className={classes.AuthForm}>
            {
                keys ? keys.map(input =>{
                    const Icon = inputs[input].icon

                    if(inputs[input].type === 'select'){
                        return <Select 
                        key={input} 
                        ID={input} 
                        title={input}
                        value={inputs[input].value}
                        onchange={setValue}>
                            <Icon/>
                        </Select>
                    }
                    else {
                    return(
                        <Input
                        disabled={loading}
                        type={inputs[input].type}
                        key={input}
                        ID={input}
                        required
                        valid={inputs[input].valid}
                        placeholder={inputs[input].text}
                        value={inputs[input].value}
                        onchange={setValue}
                        pattern={inputs[input].pattern}
                        patternMsg={inputs[input].patternMsg}
                    >
                        <Icon />
                    </Input>
                    )
                }}
                   )
                    : null
            }
            <div className={classes.ButtonsContainer}>
                {links.map(link => <NavLink key={link.ID} to={link.to}>{link.title}</NavLink>)}
            </div>
            <p className={classes.ErrorMessage}>{errorMessage}</p>
            <Button loading={loading}>{submitTitle}</Button>
        </form>
    );
};

export default Form;