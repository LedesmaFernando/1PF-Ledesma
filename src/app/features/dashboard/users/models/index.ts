export interface User{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    createdAt: Date;
    password:string;
    token:string;
    role:string;
}

export interface Course{
    id:string;
    name:string;
    class:number;

}