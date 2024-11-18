import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from './models';
import { Course } from '../../courses/models';
import { User } from '../../users/models';

export const enrollmentFeatureKey = 'enrollment';


const enrollmentDB:Enrollment[] = [
  {
    id:'asap',
    userId:'aqee',
    courseId:'ñlld',
  },
  {
    id:'dddd',
    userId:'adad',
    courseId:'klkl'
  }
];

const coursesDB:Course[] = [
  {id:'1', name:'carpinteria', createdAt: new Date },
  {id:'2', name:'hojaleteria', createdAt: new Date }
];

const usersDB:User[] = [
  {id: '1', firstName: 'Juan', lastName: 'Perez', email:'jperez@gmail.com', createdAt: new Date, password:'2020', token:"99995", role:"alumno"},
  {id: '2', firstName:'Jose', lastName:'Gonzales',email:'jgonzales@gmail.com', createdAt: new Date, password:'8899', token:'99991', role:'admin'}
];

export interface State {
  enrollments:Enrollment[];
  coursesOptions:Course[];
  userOptions:User[];
}

export const initialState: State = {
  enrollments:[],
  coursesOptions:[],
  userOptions:[],
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, state => 
  {
    return{
      ...state, enrollments:[...enrollmentDB]
    }
  }
  ),
  on(EnrollmentActions.loadCoursesOptions,(state)=>{
    return{
      ...state,coursesOptions:[...coursesDB]
      
    }
  } ),
  on(EnrollmentActions.loadUsersOptions,(state)=>{
    return{
      ...state, userOptions:[...usersDB]
    }
  }),
  on(EnrollmentActions.createEnrollment,(state, action)=>{
    return{
      ...state, enrollments:[...state.enrollments,{id:'9999', courseId:action.courseId, userId:action.userId}]
    }
  })

);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

