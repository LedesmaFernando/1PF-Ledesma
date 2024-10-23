import { Injectable } from '@angular/core';
import { User } from '../../features/dashboard/users/models';
import { Observable, of } from 'rxjs';



let DATABASE: User[] = [
  {id: '1', firstName: 'Juan', lastName: 'Perez', email:'jperez@gmail.com', createdAt: new Date},
  {id: '2', firstName:'Jose', lastName:'Gonzales',email:'jgonzales@gmail.com', createdAt: new Date},
  {id: '3', firstName:'Facundo', lastName:'Duran', email:'fduran@gmail.com', createdAt: new Date},
  {id: '4', firstName:'Fernando', lastName:'Ledesma', email:'fledesma.com', createdAt: new Date},
];


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]>{
    return new Observable((observer)=>{
      observer.next(DATABASE);
    })
  }

  updateUsersById(id:string, update: Partial<User>){
    DATABASE = DATABASE.map((user)=> 
      user.id === id ? {...user,...update}: user );
    return new Observable<User[]>((observer)=>
      observer.next(DATABASE)
    )
  }

  removeUserById(id:string):Observable<User[]>{
    DATABASE = DATABASE.filter((user) => user.id != id);
    return of(DATABASE);

  }
}

