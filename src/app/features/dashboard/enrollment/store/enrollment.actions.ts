import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment } from './models';
import { User } from '../../users/models';
import { Course } from '../../courses/models';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{data: Enrollment[]}>(),
    'Load Enrollments Failure': props<{error:Error}>(),


    'Load Users And Courses Options': emptyProps(),
    'Load Users And Courses Options Success': props<{users:User[], courses:Course[]}>(),
    'Load Users And Courses Options Failure': props<{error:Error}>(),


    'Create Enrollment': props<{userId: string; courseId:string;}>(),
    'Create Enrollment Success' : props<{data: Enrollment}>(),
    'Create Enrollment Failure' : props<{error: Error}>()
    
    
  }
});
