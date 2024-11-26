import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from '../../features/dashboard/enrollment/store/models';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  constructor(private httClient:HttpClient) { }

  getEnrollments():Observable<Enrollment[]>{
    return this.httClient.get<Enrollment[]>(`${environment.apiBaseURL}/enrollments?_embed=user&_embed=course`)
  };
  createEnrollment(payload:Omit<Enrollment,'id'|'user'|'course'>):Observable<Enrollment>{
    return this.httClient.post<Enrollment>(`${environment.apiBaseURL}/enrollments`, payload)
  }
}
