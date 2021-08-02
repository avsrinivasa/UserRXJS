import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "./user";

@Injectable()
export class UserService {
  constructor(private http:HttpClient) {

  }
  private USERURL ='http://localhost:3000/users'
  getAllUsers(){
    return this.http.get(this.USERURL).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.USERURL, user).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
  deleteUser(id: number){
    return this.http.delete<User>(this.USERURL+"/"+id).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
