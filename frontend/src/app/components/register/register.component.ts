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
  }

}
