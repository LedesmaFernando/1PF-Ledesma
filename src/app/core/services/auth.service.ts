import { Injectable } from '@angular/core';
import { AuthData } from '../../features/auth/models';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { User } from '../../features/dashboard/users/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


// const FAKE_USER: User = {
//     id:'10',
//     firstName:'admin',
//     lastName:'admin',
//     email:'admin@email.com',
//     createdAt: new Date,
//     password: '1234',
//     token:'8888'
// }


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<null | User>(null);

  public authUser$ = this._authUser$.asObservable();

  constructor(private router:Router, private httpClient:HttpClient) { }


  private handleAuthenticaion(users:User[]):User | null{
    if(!!users[0]){
      //sucess
      this._authUser$.next(users[0]);
      localStorage.setItem('token',users[0].token);
      return users[0]
    }else{
      //error
      return null;
    }
  }

  login(data:AuthData):Observable<User>{
    return this.httpClient.get<User[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`).
    pipe(map((users)=> {
      const user = this.handleAuthenticaion(users)
      if(user){
        return user;
      }else{
        throw throwError(()=> new Error('Los datos son invalidos'))
      }}))
    // if(data.email != FAKE_USER.email || data.password != FAKE_USER.password){
    //   return throwError(()=> new Error('Los datos son invalidos'))
    // }
    // this._authUser$.next(FAKE_USER);
    // localStorage.setItem('token',FAKE_USER.token)

    // return of(FAKE_USER);

  }

  logOut():void{
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['auth','login']);
  }

  verifyToken():Observable<boolean>{

    return this.httpClient.get<User[]>(`http://localhost:3000/users?token=${localStorage.getItem('token')}`).
    pipe(map((users)=>{
      const user = this.handleAuthenticaion(users);
      return !! user;

    }))
    // const isValid = localStorage.getItem('token') === FAKE_USER.token;
    // if(isValid){
    //   this._authUser$.next(FAKE_USER);
    // }else{
    //   this._authUser$.next(null);
    // }
    // return of(isValid);

  }
}
