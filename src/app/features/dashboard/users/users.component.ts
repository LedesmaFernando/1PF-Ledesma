import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { User } from './models';


const ELEMENT_DATA: User[] = [
  {id: '1', firstName: 'Juan', lastName: 'Perez', email:'jperez@gmail.com', createdAt: new Date},
  {id: '2', firstName:'Jose', lastName:'Gonzales',email:'jgonzales@gmail.com', createdAt: new Date},
  {id: '3', firstName:'Facundo', lastName:'Duran', email:'fduran@gmail.com', createdAt: new Date},
  {id: '4', firstName:'Fernando', lastName:'Ledesma', email:'fledesma.com', createdAt: new Date},
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


  onDelete(id:string):void{
    if(confirm("estas seguro?")){
      this.dataSource = this.dataSource.filter((user)=> user.id !== id);
    }
    
  }

  openModal(editingUser?:User): void{
    this.matDialog.open(UsersDialogComponent, {
      data: {
        editingUser,
      }
    })
    .afterClosed()
    .subscribe({
      next:(result)=>{
        console.log("Recibimos: ", result);

        if(!!result){

          if(editingUser){
            this.dataSource = this.dataSource.map((user) => user.id === editingUser.id ? {...user,...result} : user );  
          }else{
            this.dataSource = [...this.dataSource,{
            ...result, id: this.dataSource.length+1, createdAt: new Date()
          }]
          }
        }
      }
    })
  }

  }


