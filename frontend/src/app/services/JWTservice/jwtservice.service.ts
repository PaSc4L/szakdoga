import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JWTServiceService {

  constructor(private http: HttpClient) {}

  public addToken(token:string){
    sessionStorage.setItem("token", token);
  }
}
