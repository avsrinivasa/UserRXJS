import { createAction, props } from "@ngrx/store";
import { User } from "./user";

export const addUser = createAction('[User] Add User', props<{ user: User }>())
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>())
export const allUsers = createAction('[User] All Users', props<{ user: User[] }>())
