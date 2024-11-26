import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { EnrollmentsService } from '../../../../core/services/enrollments.service';
import { Action, select } from '@ngrx/store';
import { UsersService } from '../../../../core/services/users.service';
import { CoursesService } from '../../../../core/services/courses.service';

@Injectable()
export class EnrollmentEffects {


  loadEnrollments$: Actions<Action<string>>;
  createEnrollments$: Actions<Action<string>>;
  createEnrollmentsSuccess$:Actions<Action<string>>;
  loadUsersAndCoursesOptions$:Actions<Action<string>>;

  constructor(private actions$: Actions, 
              private enrollmentsService:EnrollmentsService,
              private userService:UsersService,
              private coursesService:CoursesService) {

    this.loadEnrollments$ = createEffect(() => {
      return this.actions$.pipe(
  
        ofType(EnrollmentActions.loadEnrollments),
        concatMap(() => this.enrollmentsService.getEnrollments().
        pipe(map((response)=> EnrollmentActions.loadEnrollmentsSuccess({data:response})),
        catchError((error)=> of(EnrollmentActions.loadEnrollmentsFailure(error)))
      
      )
    )
      );
    });

    this.createEnrollments$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(EnrollmentActions.createEnrollment),
        concatMap((action)=> this.enrollmentsService.createEnrollment({userId: action.userId, 
          courseId: action.courseId}).
          pipe(map((data)=>EnrollmentActions.createEnrollmentSuccess({data})),
          catchError((error)=> of(EnrollmentActions.createEnrollmentFailure({ error })
      ))))
      )
  });

    this.createEnrollmentsSuccess$ = createEffect(()=>{
      return this.actions$.pipe(
        ofType(EnrollmentActions.createEnrollmentSuccess),
        map(()=> EnrollmentActions.loadEnrollments())
      )
    });

    this.loadUsersAndCoursesOptions$ = createEffect(()=>{
      return this.actions$.pipe(
        ofType(EnrollmentActions.loadUsersAndCoursesOptions),
        concatMap(()=>forkJoin([
          this.userService.getUsers(),
          this.coursesService.getCourses()
        ]).pipe(
          map((respons)=> EnrollmentActions.loadUsersAndCoursesOptionsSuccess({ 
            users:respons[0], 
            courses:respons[1]
           })),
        catchError((error)=> of(EnrollmentActions.loadUsersAndCoursesOptionsFailure({error: error})))
        ))
      )
    })
  }
}
