import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/dtos/user';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { WebsocketServiceService } from 'src/app/services/websocketService/websocket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  
  friends: Friend[] = [];

  constructor(private websocketService: WebsocketServiceService, private service: UserServiceService) {}

  sendMessage() {
    let message = (<HTMLInputElement>document.getElementById("message")).value;
    this.websocketService.sendPublicMessage(message);
  }
  ngOnInit(): void {
    const id = sessionStorage.getItem("id") || '{}';
    this.websocketService.getFriendList(Number(id)).subscribe((next) =>{
      console.log(next);
      this.friends = next;
    });
    console.log(id);
    console.log(this.friends);
  }
}
