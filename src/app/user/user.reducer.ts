import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { addUser, allUsers, deleteUser } from "./user.action";

const initialUserstate: User[] = [{ firstname: "Srinivasa", lastname: "reddy", id: 1 }];

export const userreducer = createReducer<User[]>(initialUserstate,
  on(addUser, (state, action) => state.concat(
    {
      ...action.user,
      id: state.length? state[state.length - 1].id + 1 :1
    })),
  on(deleteUser, (state, action) => state.filter(user => user.id !== action.id)),
  on(allUsers, (state, action) => action.user)
);
