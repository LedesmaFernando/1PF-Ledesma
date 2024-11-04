import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../core/services/users.service';
import { User } from '../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{

  idUsuario?:string;
  user?:User;

  constructor(private activatedRoute:ActivatedRoute, private usersServices:UsersService ){
    this.idUsuario = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.usersServices.getUsersById(this.activatedRoute.snapshot.params['id']).subscribe({
      next:(user)=>{
        this.user = user;
      }
    })  
  }

}
