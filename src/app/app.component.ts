
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { User } from './user/user';
import { addUser, deleteUser } from './user/user.action';
import { UserState } from './user/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string;
  lastName:string;
  constructor(private store:Store<UserState>){
  }
  users$= this.store.pipe(select(state=>state.users));
  addUser(){
    let user:User = {firstname:this.firstName,lastname:this.lastName};
    this.store.dispatch(addUser({user}))
  }
  deleteUser(id:number){
    this.store.dispatch(deleteUser({id}))
  }
}
