import { Component, OnInit } from '@angular/core';
import { Friend, FriendList } from 'src/app/dtos/user';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { WebsocketServiceService } from 'src/app/services/websocketService/websocket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  
  friends: Friend[] = [];
  readData: any;

  constructor(private websocketService: WebsocketServiceService, private service: UserServiceService) {}

  sendMessage() {
    let message = (<HTMLInputElement>document.getElementById("message")).value;
    this.websocketService.sendPublicMessage(message);
    
    console.log(this.friends);
  }
  addFriend() {
    let email = (<HTMLInputElement>document.getElementById("add")).value;
    let friendId = 0;
    let myId = sessionStorage.getItem("id");
    
    console.log(myId);
    this.service.getUserByEmail(email).subscribe((next) =>{
      friendId= next;
      console.log(friendId);
      
      let friend:FriendList ={
      firstUser: Number(myId),
      secondUser: friendId
    }
    console.log(friend);

    this.websocketService.addFriend(friend);
    });
  }

   ngOnInit(): void {
    const id = sessionStorage.getItem("id") || '{}';
      this.websocketService.getFriendList(Number(id)).subscribe((next) =>{
      for(let i = 0; i < next.length; i++){
        this.friends[i] = next[i];
        console.log(this.friends[i]);
      }
    });
    
  }
}
