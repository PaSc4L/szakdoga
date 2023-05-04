import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/dtos/user';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserServiceService, private router: Router) { }

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

  if(name != "" && email != "" && password != "" && passwordAgain != "" && dateOfBirth != "" && phone != ""){
    if(password == passwordAgain){
      let register:User ={
        name: name,
        email: email,
        password: password,
        phone: phone,
        birthdate: dateOfBirth
      }
      this.service.register(register);
      this.router.navigate(['/']);
    }else{
      alert("A jelszót hibásan adta meg!");
    }
  }else{
    alert("Minden mező megadása kötelező!")
  }


  }

}
