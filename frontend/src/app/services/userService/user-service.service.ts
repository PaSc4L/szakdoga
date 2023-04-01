import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private http: HttpClient) { }

  public login(email:string, password:string){
    let params = new URLSearchParams();
    params.set("email",email);
    params.set("password",password);
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded"),
      observe: "response" as "response"
    }
    return this.http.post(`${environment.url}/user/login`, 
    params, options)
  }

  public register(name:string, email:string, password:string, date:Date, phone:string){
    let params =  new URLSearchParams();
    params.set("name", name);
    params.set("name", name);
    params.set("name", name);
    params.set("name", name);
    params.set("name", name);
    params.set("name", name);

    return this.http.post(`${environment.url}/user/register`, params);
  }

  //getAllusers
  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.url}/user/all`);
  }
  //addUser
  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${environment.url}/user/add`, user);
  }

  public updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${environment.url}/user/update`, user);
  }

  public deleteUser(userId: number): Observable<void>{
    return this.http.delete<void>(`${environment.url}/user/delete/${userId}`);
  }

}