import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap,  exhaustMap,  map, tap } from 'rxjs/operators';
import { User } from "./user";
import { addUser, addUserSuccess, allUsers, allUsersSuccess, deleteUser } from "./user.action";
import { UserService } from "./user.service";

@Injectable()
export class UserEffects{
  userEffects$= createEffect(()=> this.action$.pipe(
    ofType(allUsers),
    exhaustMap(() =>
      this.dataService.getAllUsers().pipe(
        map((users:User[]) => allUsersSuccess(users))
      )
    )
  ))
  addEffects$= createEffect(()=> this.action$.pipe(
    ofType(addUser),tap((user)=>console.log(user)),
    concatMap(({user}) =>
      this.dataService.addUser(user).pipe(
        map(() => addUserSuccess({user}))
      )
    )
  ))
  deletEffects$= createEffect(()=> this.action$.pipe(
    ofType(deleteUser),tap((id)=>console.log(id)),
    concatMap(({id}) =>
      this.dataService.deleteUser(id).pipe(
        map(() => allUsers())
      )
    )
  ))

constructor(private action$:Actions, private dataService: UserService){

}
}
