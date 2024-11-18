import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Courses Options': emptyProps(),
    'Load Users Options': emptyProps(),
    'Create Enrollment': props<{courseId: string; userId:string;}>(),
    
    
  }
});
