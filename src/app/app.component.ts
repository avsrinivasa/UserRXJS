
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from './user/user';
import { addUser, allUsers, deleteUser } from './user/user.action';
import { UserService } from './user/user.service';
import { UserState } from './user/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string;
  lastName:string;
  users$;
  constructor(private store:Store<UserState>){
     this.store.dispatch(allUsers());
     this.users$=this.store.select('users');
  }

  addUser(){
    let user:User = {firstname:this.firstName,lastname:this.lastName,id:Math.floor(Math.random() * 100)};
    this.store.dispatch(addUser({user}));
    this.firstName="";
    this.lastName="";
  }
  deleteUser(id:number){
    this.store.dispatch(deleteUser({id}))
  }
}
