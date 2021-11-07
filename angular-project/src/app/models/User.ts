export interface User{
    name:string;
    username:string;
    email:string;
    password:string;
}

export interface Login{
    name:string;
    password:string;
}

export interface UserNoPW{
    _id:string;
    name:string;
    username:string;
    email:string;
}