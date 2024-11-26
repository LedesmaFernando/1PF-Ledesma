import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from './models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';


export const enrollmentFeatureKey = 'enrollment';

export interface State {
  enrollments:Enrollment[];
  coursesOptions:Course[];
  userOptions:User[];
  loadEnrollmentsError: Error | null;
}

export const initialState: State = {
  enrollments:[],
  coursesOptions:[],
  userOptions:[],
  loadEnrollmentsError: null,
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, state => 
  {
    return{
      ...state
    }
  }
  ),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action)=>{
    return{
      ...state, 
      enrollments:action.data,
      loadEnrollmentsError: null
    }
  }),
  on(EnrollmentActions.loadEnrollmentsFailure,(state, action)=>{
    return{
      ...state,
      ...initialState,
      loadEnrollmentsError: action.error
    }

  }),
  on(EnrollmentActions.loadUsersAndCoursesOptions,(state)=>{
    return{
      ...state
    }
  }),
  on(EnrollmentActions.loadUsersAndCoursesOptionsSuccess,(state,action)=>{
    return{
      ...state,
      loadEnrollmentsError:null,
      userOptions: action.users,
      coursesOptions: action.courses
    }
  }),
  on(EnrollmentActions.loadUsersAndCoursesOptionsFailure,(state, { error })=>{
    return{
      ...state,
      loadEnrollmentsError:error
    }
  })
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

