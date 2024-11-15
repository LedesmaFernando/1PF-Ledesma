import { Injectable } from '@angular/core';
import { AuthData } from '../../features/auth/models';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { User } from '../../features/dashboard/users/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/actions/auth.actions';
import { selectAuthenticatedUser } from '../../store/selectors/auth.selector';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _authUser$ = new BehaviorSubject<null | User>(null);

  public authUser$ : Observable<User | null>;

  constructor(private router:Router, private httpClient:HttpClient, private store:Store) { 
    this.authUser$ = this.store.select(selectAuthenticatedUser);
  }


  private handleAuthenticaion(users:User[]):User | null{
    if(!!users[0]){
      //sucess
      this.store.dispatch(AuthActions.setAuthenticatedUser({user:users[0]}))
      // this._authUser$.next(users[0]);
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
  }

  logOut():void{
    // this._authUser$.next(null);
    this.store.dispatch(AuthActions.unsetAuthenticatedUser())
    localStorage.removeItem('token');
    this.router.navigate(['auth','login']);
  }

  verifyToken():Observable<boolean>{

    return this.httpClient.get<User[]>(`http://localhost:3000/users?token=${localStorage.getItem('token')}`).
    pipe(map((users)=>{
      const user = this.handleAuthenticaion(users);
      return !! user;

    }))
  
  }
}
