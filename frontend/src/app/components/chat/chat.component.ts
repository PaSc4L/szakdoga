import { Component, OnInit } from '@angular/core';
import { WebsocketServiceService } from 'src/app/services/websocketService/websocket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  friends: number[] = [];

  constructor(private websocketService: WebsocketServiceService) {}

  sendMessage() {
    let message = (<HTMLInputElement>document.getElementById("message")).value;
    this.websocketService.getRooms(17);
  }
  ngOnInit(): void {
  }
}
