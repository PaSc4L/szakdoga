import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiServiceUrl = ''; 

  constructor(private http: HttpClient) { }

  //getAllusers
  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServiceUrl}/user/all`);
  }
  //addUser
  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServiceUrl}/user/add`, user);
  }

  public updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiServiceUrl}/user/update`, user);
  }

  public deleteUser(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/user/delete/${userId}`);
  }

}