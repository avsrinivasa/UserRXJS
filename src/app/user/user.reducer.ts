import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { addUser, addUserSuccess, allUsers, allUsersSuccess, deleteUser } from "./user.action";

const initialUserstate: User[] = null;

export const userreducer = createReducer<User[]>(initialUserstate,
  on(addUser),
  on(deleteUser, (state, action) => state.filter(user => user.id !== action.id)),
  on(allUsers),
  on(allUsersSuccess, (state, { users }) => [...users]),
  on(addUserSuccess, (state, { user }) => [...state, user])
);
