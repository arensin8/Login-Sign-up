export const validate = (data,type) => {

    const errors = {};


    if( !data.email){
        errors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "email addres is invalid"
    } else {
        delete errors.email
    }

    if( !data.password){
        errors.password = "password is required"
    } else if( data.password.length < 6 ){
        errors.password ="password must be at least 6 characters"
    } else {
        delete errors.password
    }

    
    if( type==="signup"){
            
        if(!data.name.trim() ){
            errors.name = "name required"
        } else {
            delete errors.name;
        }

        if( !data.confirmPassword){
            errors.confirmPassword ="confirm password"
        } else if( data.confirmPassword !== data.password){
            errors.confirmPassword = "password do not match"
        } else {
            delete errors.confirmPassword
        }

        if(data.isAccepted){
            delete errors.isAccepted
        }else {
            errors.isAccepted = "accept our regulations"
        }

    }

    return errors;
}