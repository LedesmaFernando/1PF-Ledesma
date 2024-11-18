import { Injectable } from '@angular/core';
import { Observable, of, map, concatMap } from 'rxjs';
import { Course } from '../../features/dashboard/courses/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


// let DATABASE_COURSES: Course[] = [
//   {id:'1', name:'carpinteria', createdAt: new Date },
//   {id:'2', name:'hojaleteria', createdAt: new Date },
//   {id:'3', name:'electricidad', createdAt: new Date },
//   {id:'4', name:'pintura', createdAt: new Date }
// ]

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseURL = environment.apiBaseURL;

  constructor(private httpClient:HttpClient) { }

  // getCourse(): Observable<Course[]>{
  //   return this.httpClient.get<Course[]>(`${this.baseURL}/courses`);
  // }

  // createCourse(data:Omit<Course,'id'>): Observable<Course>{
  //   return this.httpClient.post<Course>(`${this.baseURL}/courses`,
  //     {...data, 
  //       createdAt: new Date().toISOString(),
  //     });
  // }

  // updateCourseById(id:string, update: Partial<Course>){
  //   return this.httpClient.patch<Course>(`${this.baseURL}/courses/${id}`,{...update}).
  //   pipe(concatMap(()=> this.getCourse()));
  // }

  // removeCourseById(id:string):Observable<Course[]>{
  //   return this.httpClient.delete<Course>(`${this.baseURL}/courses/${id}`).
  //   pipe(concatMap(()=> this.getCourse()));

  // }
  getCourses(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}/courses`);
  }


createCourse(data:Omit<Course,'id'>): Observable<Course>{
  return this.httpClient.post<Course>(`${this.baseURL}/courses`,
    {...data, 
      createdAt: new Date().toISOString()
    });
}

updateCoursesById(id:string, update: Partial<Course>){
  return this.httpClient.patch<Course>(`${this.baseURL}/courses/${id}`,{...update}).
  pipe(concatMap(()=> this.getCourses()));
}

removeCourseById(id:string):Observable<Course[]>{
  return this.httpClient.delete<Course>(`${this.baseURL}/courses/${id}`).
  pipe(concatMap(()=> this.getCourses()));

}

 
}

