import { Injectable } from '@angular/core';
import { Observable, of, map, concatMap } from 'rxjs';
import { Course } from '../../features/dashboard/courses/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseURL = environment.apiBaseURL;

  constructor(private httpClient:HttpClient) { }


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

