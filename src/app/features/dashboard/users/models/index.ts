export interface User{
    id:string;
    firstName:string;
    lastName:string;
    course:string;
    email:string;
    createdAt: Date;

}

export interface Course{
    id:string;
    name:string;
    class:number;

}