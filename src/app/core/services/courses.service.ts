import { Injectable } from '@angular/core';
import { Course } from '../../features/dashboard/users/models';
import { Observable, of } from 'rxjs';





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
    // return new Observable((observer)=>{
    //   observer.next(DATABASE_COURSES);
    // })
    return of(DATABASE_COURSES);
  }

 
}

