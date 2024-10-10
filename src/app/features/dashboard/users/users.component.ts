import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { User } from './models';


const ELEMENT_DATA: User[] = [
  {id: '1', firsName: 'Juan', lastName: 'Perez', email:'jperez@gmail.com', createdAt: new Date},
  {id: '2', firsName:'Jose', lastName:'Gonzales',email:'jgonzales@gmail.com', createdAt: new Date},
  {id: '3', firsName:'Facundo', lastName:'Duran', email:'fduran@gmail.com', createdAt: new Date},
  {id: '4', firsName:'Fernando', lastName:'Ledesma', email:'fledesma.com', createdAt: new Date},
];



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'date', 'actions'];
  dataSource = ELEMENT_DATA;


  constructor(private matDialog: MatDialog){}


  openModal(): void{
    this.matDialog.open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next:(result)=>{
        console.log("Recibimos: ", result);

        if(!!result){
          [...this.dataSource, {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'}];
        }
      }
    })
  }

  }


