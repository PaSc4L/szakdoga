import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    //let currentTime = new Date();
    //(<HTMLInputElement>document.getElementById(currentTime)).value;
  }

  RegisterClick(){
    let name = (<HTMLInputElement>document.getElementById("name")).value;;
    let email = (<HTMLInputElement>document.getElementById("email")).value;;
    let password = (<HTMLInputElement>document.getElementById("password")).value;;
    let passwordAgain = (<HTMLInputElement>document.getElementById("passwordAgain")).value;;
    let dateOfBirth = (<HTMLInputElement>document.getElementById("dateOfBirth")).value;;
    let phone = (<HTMLInputElement>document.getElementById("phone")).value;;
  }

}
