import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from './store/enrollment.actions';
import { Observable } from 'rxjs';
import { Enrollment } from './store/models';
import { selectCoursesOptions, selectEnrollments, selectUsersOptions } from './store/enrollment.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../users/models';
import { Course } from '../courses/models';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.scss'
})
export class EnrollmentComponent implements OnInit{

  enrollments$: Observable<Enrollment[]>;
  courses$:Observable<Course[]>;
  users$:Observable<User[]>;

  enrollmentFrom : FormGroup

  constructor(private store:Store, private formBuider:FormBuilder){

    this.enrollmentFrom = this.formBuider.group({
      courseId: [null, [Validators.required]],
      userId: [null, [Validators.required]]
    })

    this.enrollments$ = this.store.select(selectEnrollments);
    this.courses$ = this.store.select(selectCoursesOptions);
    this.users$ = this.store.select(selectUsersOptions);
  }

  ngOnInit(): void {
    this.store.dispatch(EnrollmentActions.loadEnrollments());
    this.store.dispatch(EnrollmentActions.loadCoursesOptions());
    this.store.dispatch(EnrollmentActions.loadUsersOptions());
  }

  onSubmit():void{
    if(this.enrollmentFrom.invalid){
      this.enrollmentFrom.markAllAsTouched();
    }else{
      this.store.dispatch(EnrollmentActions.createEnrollment(this.enrollmentFrom.value));
      this.enrollmentFrom.reset();
      alert("Inscipcion realizada con exito")
    }
  }

}
