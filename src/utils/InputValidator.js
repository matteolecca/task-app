
const validationPatterns = {
    text : {
        regex : /[A-Za-z0-9]{1}/,
    },
    email :{
        regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message : 'Enter a valid email'
    },
    password :{
        regex : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message : 'Password should contain a number, a letter, min eight characters'
    },
    number:{
        regex : /[0-9]{1}/,
        message : 'Set a number between 1 and 12'
    }
}



export const inputValidator = (input, type) =>{
    const regex = validationPatterns[type].regex.test(input)
    return  regex
}

export const inputsValidator = inputs =>{
    console.log("INPUTS", inputs)
    let valid = true
    for (let i in inputs){
        if(!inputs[i].valid ) valid = false
    }
    return valid
}
