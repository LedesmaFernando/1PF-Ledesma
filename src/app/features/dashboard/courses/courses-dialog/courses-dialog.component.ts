import { Component, Inject } from '@angular/core';
import { Course } from '../../users/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';




interface CourseDialogData{
  editingCourse?:Course
}
@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrl: './courses-dialog.component.scss'
})
export class CoursesDialogComponent {

  courseForm:FormGroup;

  constructor(private matDialogRef:MatDialogRef<CoursesDialogComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data?:CourseDialogData
  ){

    this.courseForm = this.formBuilder.group({
      name:[null, [Validators.required]],
      class:[null, [Validators.required]],
    });
    this.patchFormValue();
  }

  patchFormValue(){
    if(this.data?.editingCourse){
      this.courseForm.patchValue(this.data.editingCourse);
    }
  }

  onSave(): void{
    if(this.courseForm.invalid){
      this.courseForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.courseForm.value);
    }
  }
}

