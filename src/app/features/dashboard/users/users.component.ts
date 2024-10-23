import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from '../../../core/services/users.service';






@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'email', 'date', 'actions'];
  dataSource: User[] = [];


  constructor(private matDialog: MatDialog, private userService: UsersService){}


  ngOnInit(): void {
    this.loadUsers();
    
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next:(users) => {
        this.dataSource = users;        
      }
    })
  }


  onDelete(id:string):void{
    if(confirm("estas seguro?")){
      this.userService.removeUserById(id).subscribe({
        next:(users) => {this.dataSource = users}
      })
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
            this.handleUpdate(editingUser.id, result)  
          }else{
            this.dataSource = [...this.dataSource,{
            ...result, id: this.dataSource.length+1, createdAt: new Date()
          }]
          }
        }
      }
    })
  }

  handleUpdate(id:string, update: User):void{
    this.userService.updateUsersById(id, update).subscribe({
      next:(users) => {this.dataSource = users}
    })
  }

  }


