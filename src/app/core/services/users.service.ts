import { Injectable } from '@angular/core';
import { User } from '../../features/dashboard/users/models';
import { map, Observable, of } from 'rxjs';




let DATABASE_USERS: User[] = [
  {id: '1', firstName: 'Juan', lastName: 'Perez', course:'carpinteria', email:'jperez@gmail.com', createdAt: new Date},
  {id: '2', firstName:'Jose', lastName:'Gonzales', course:'carpinteria',email:'jgonzales@gmail.com', createdAt: new Date},
  {id: '3', firstName:'Facundo', lastName:'Duran', course:'carpinteria', email:'fduran@gmail.com', createdAt: new Date},
  {id: '4', firstName:'Fernando', lastName:'Ledesma', course:'carpinteria', email:'fledesma.com', createdAt: new Date},
];


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]>{
    return new Observable((observer)=>{
      observer.next(DATABASE_USERS);
    })
  }

  getUsersById(id:string):Observable<User | undefined>{
    return this.getUsers().pipe(map((users)=> users.find((u)=>u.id === id)))
  }

  // }

  updateUsersById(id:string, update: Partial<User>){
    DATABASE_USERS = DATABASE_USERS.map((user)=> 
      user.id === id ? {...user,...update}: user );
    return new Observable<User[]>((observer)=>
      observer.next(DATABASE_USERS)
    )
  }

  removeUserById(id:string):Observable<User[]>{
    DATABASE_USERS = DATABASE_USERS.filter((user) => user.id != id);
    return of(DATABASE_USERS);

  }
}

