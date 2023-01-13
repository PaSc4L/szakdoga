import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
  }

  LoginClick(){
    
  }

}
