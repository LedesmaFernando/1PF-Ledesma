import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: ``
})
export class UsersDialogComponent {

  constructor(private matDialogRef: MatDialogRef <UsersDialogComponent>){}

  onSave(): void{
    this.matDialogRef.close({result:'ok'})
  }
}
