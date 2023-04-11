import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  /*title = 'WebSocketChatRoom';
  greetings: string[] = [];
  disabled = true;
  //newmessage: string;
  private stompClient = null;
*/
  constructor(private service:UserServiceService) { }


  ngOnInit(): void {
  }

  gomb(){
    this.service.getUsers().subscribe();
  }

  sendMessage(){
    console.log("Működik a gomb :3");
  }
}
