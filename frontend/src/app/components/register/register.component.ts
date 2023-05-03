import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  /*nevFormControl = new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÁáÉéÚúŰűŐőÓóÜüÖö ]*')]);
  jelszoFormControl = new FormControl('', [Validators.required]);
  szuletesiidoFormControl = new FormControl('', [Validators.required]);
*/
  //if(this.nevFormControl.hasError('required')==true
  
  let name = (<HTMLInputElement>document.getElementById("name")).value;;
  let email = (<HTMLInputElement>document.getElementById("email")).value;;
  let password = (<HTMLInputElement>document.getElementById("password")).value;;
  let passwordAgain = (<HTMLInputElement>document.getElementById("passwordAgain")).value;;
  let dateOfBirth = (<HTMLInputElement>document.getElementById("dateOfBirth")).value;;
  let phone = (<HTMLInputElement>document.getElementById("phone")).value;;

  if(name != "" && email != "" && password != "" && passwordAgain != "" && dateOfBirth != "" && phone != ""){
    if(password == passwordAgain){
      //this.service.register(name, email, password, dateOfBirth, phone);
    }else{
      alert("A jelszót hibásan adta meg!");
    }
  }else{
    alert("Minden mező megadása kötelező!")
  }


  }

}
