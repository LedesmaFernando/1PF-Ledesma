import { Course } from "../../../courses/models";
import { User } from "../../../users/models";


export interface Enrollment{
    id:string,
    userId:string,
    courseId:string,
    user?:User,
    course?:Course
}