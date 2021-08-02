import { createAction, props } from "@ngrx/store";
import { User } from "./user";

export const addUser = createAction('[User] Add User', props<{ user: User }>())
export const addUserSuccess = createAction('[User] Add UserSuccess', props<{ user: User }>())
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>())
export const allUsers = createAction('[User] All Users')
export const allUsersSuccess = createAction('[User] All UsersSuccess',(users:User[])=>({users}))
