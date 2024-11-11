import { Injectable } from '@angular/core';
import { AuthData } from '../../features/auth/models';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../../features/dashboard/users/models';
import { Router } from '@angular/router';


const FAKE_USER: User = {
    id:'10',
    firstName:'admin',
    lastName:'admin',
    course:'pintura',
    email:'admin@email.com',
    createdAt: new Date,
    password: '1234',
    token:'8888'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<null | User>(null);

  public authUser$ = this._authUser$.asObservable();

  constructor(private router:Router) { }

  login(data:AuthData):Observable<User>{
    if(data.email != FAKE_USER.email || data.password != FAKE_USER.password){
      return throwError(()=> new Error('Los datos son invalidos'))
    }
    this._authUser$.next(FAKE_USER);
    localStorage.setItem('token',FAKE_USER.token)

    return of(FAKE_USER);

  }

  logOut():void{
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['auth','login']);
  }

  verifyToken():Observable<boolean>{
    const isValid = localStorage.getItem('token') === FAKE_USER.token;
    if(isValid){
      this._authUser$.next(FAKE_USER);
    }else{
      this._authUser$.next(null);
    }
    return of(isValid);

  }
}
