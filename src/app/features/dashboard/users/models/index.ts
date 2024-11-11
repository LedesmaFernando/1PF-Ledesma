export interface User{
    id:string;
    firstName:string;
    lastName:string;
    course:string;
    email:string;
    createdAt: Date;
    password:string;
    token:string;
}

export interface Course{
    id:string;
    name:string;
    class:number;

}