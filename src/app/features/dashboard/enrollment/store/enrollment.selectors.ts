import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from './enrollment.reducer';

export const selectEnrollmentState = createFeatureSelector<fromEnrollment.State>(
  fromEnrollment.enrollmentFeatureKey
);

export const selectEnrollments = createSelector(
  selectEnrollmentState,
  (state)=> state.enrollments
);

export const selectCoursesOptions = createSelector(
  selectEnrollmentState,(state)=>state.coursesOptions
);

export const selectUsersOptions = createSelector(
  selectEnrollmentState,(state)=>state.userOptions
);

export const selectLoadEnrollmentsError = createSelector(
  selectEnrollmentState,(state)=> state.loadEnrollmentsError
);