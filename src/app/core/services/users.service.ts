import { Injectable } from '@angular/core';
import { User } from '../../features/dashboard/users/models';
import { concatMap, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { generateRandomString } from '../../shared/utils';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURL = environment.apiBaseURL;

  constructor(private httpClient:HttpClient) { }


    getUsers(): Observable<User[]>{
      return this.httpClient.get<User[]>(`${this.baseURL}/users`);
    }
  

  createUser(data:Omit<User,'id'>): Observable<User>{
    return this.httpClient.post<User>(`${this.baseURL}/users`,
      {...data, 
        createdAt: new Date().toISOString(),
        token:generateRandomString(20)
      });
  }

  getUsersById(id:string):Observable<User | undefined>{
    return this.httpClient.get<User>(`${this.baseURL}/users/${id}`)
  }


  updateUsersById(id:string, update: Partial<User>){
    return this.httpClient.patch<User>(`${this.baseURL}/users/${id}`,{...update}).
    pipe(concatMap(()=> this.getUsers()));
  }

  removeUserById(id:string):Observable<User[]>{
    return this.httpClient.delete<User>(`${this.baseURL}/users/${id}`).
    pipe(concatMap(()=> this.getUsers()));

  }
}

