import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models';


interface UserDialogData{
  editingUser?:User;
}


@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: ``
})
export class UsersDialogComponent {

  userForm: FormGroup;


  constructor(private matDialogRef: MatDialogRef <UsersDialogComponent>, 
              private formBuilder:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data?: UserDialogData
            ){
      console.log(data);
    
    this.userForm = this.formBuilder.group({
      firstName:[null, [Validators.required]],
      lastName:[null, [Validators.required]],
      email:[null, [Validators.required]],
    });
    this.patchFormValue();
  }

  patchFormValue(){
    if(this.data?.editingUser){
      this.userForm.patchValue(this.data.editingUser);
    }
  }

  onSave(): void{
    // this.matDialogRef.close({result:'ok'})
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
