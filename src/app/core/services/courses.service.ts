import { Injectable } from '@angular/core';
import { Course } from '../../features/dashboard/users/models';
import { Observable, of, map } from 'rxjs';






let DATABASE_COURSES: Course[] = [
  {id:'1', name:'carpinteria', class:20 },
  {id:'2', name:'hojaleteria', class:40 },
  {id:'3', name:'electricidad', class:15 },
  {id:'4', name:'pintura', class:10 }
]

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourse(): Observable<Course[]>{
    return new Observable((observer)=>{
      observer.next(DATABASE_COURSES);
    })
    // return of(DATABASE_COURSES);
  }

  getCourseById(id:string):Observable<Course | undefined>{
    return this.getCourse().pipe(map((course)=> course.find((c)=>c.id === id)))
  }

  updateCourseById(id:string, update: Partial<Course>){
    DATABASE_COURSES = DATABASE_COURSES.map((courses)=> 
      courses.id === id ? {...courses,...update}: courses );
    return new Observable<Course[]>((observer)=>
      observer.next(DATABASE_COURSES)
    )
  }

  removeCourseById(id:string):Observable<Course[]>{
    DATABASE_COURSES = DATABASE_COURSES.filter((course) => course.id != id);
    return of(DATABASE_COURSES);

  }

 
}

