import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/dtos/user';
import { JWTServiceService } from 'src/app/services/JWTservice/jwtservice.service';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { WebsocketServiceService } from 'src/app/services/websocketService/websocket-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceService, private jwt: JWTServiceService, private router: Router, private websocketService:WebsocketServiceService) { }

  ngOnInit(): void {
  }

   LoginClick(){
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

     this.service.login(email,password).subscribe(
       (next) =>{
        let token = JSON.stringify(next.body).substring(10, JSON.stringify(next.body).length-2);
        this.jwt.addToken(token);

        this.service.getUserByEmail(email).subscribe(
          (next)=>{
            sessionStorage.setItem("id", ""+next);
            this.websocketService.getRooms(next).subscribe(
              (res) =>{
                this.websocketService.ids = res;
              });
            this.websocketService.connect();
            this.router.navigate(['/chat']);
          });
      }
    );
    
  }

}
