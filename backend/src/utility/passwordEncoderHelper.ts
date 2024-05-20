import bcrypt from 'bcrypt';

const saltRound=10;
export const  hassedPassword=(password:any)=>{
    const salt=bcrypt.genSaltSync(saltRound); 
    return bcrypt.hashSync(password,salt);
}

//this prdefined function  takes two arguments one is palin password and one is hassedpassword

export const comparedpass=(plainPassword:any,hassedPassword:any)=>{
    return  bcrypt.compareSync(plainPassword,hassedPassword);
    //if values same return true, else return false
}