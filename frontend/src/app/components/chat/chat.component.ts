import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatMessage, Friend, FriendList } from 'src/app/dtos/user';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { WebsocketServiceService } from 'src/app/services/websocketService/websocket-service.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  
  friends: Friend[] = [];
  messages: ChatMessage[] = [];
  readData: any;
  myName: string= "";

  choosenFriend: Friend = {
    name:"",
    id: 0,
    roomId: 0
  };
  constructor(private websocketService: WebsocketServiceService, private service: UserServiceService, private router: Router) {}

  sendMessage() {
    let message = (<HTMLInputElement>document.getElementById("message")).value;
    let myId = sessionStorage.getItem("id");

    const MessageDTO:ChatMessage ={
      senderId: Number(myId),
      recieverId: this.choosenFriend.id,
      roomId: this.choosenFriend.roomId,
      sender: this.myName,
      reciever: this.choosenFriend.name,
      content: message
      }
    this.websocketService.sendMessage(MessageDTO);
    this.websocketService.saveMessage(MessageDTO);
    //console.log(this.friends);
    (<HTMLInputElement>document.getElementById("message")).value= "";
    //if(messa)
    //messageDisplay?.innerHTML="";
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

  logout(){
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("token");
    this.router.navigate(['/']);
  }

  selectChat(friend:Friend){
    let isHidden = document.getElementById("chat-window");
    
    let header = <HTMLInputElement>document.getElementById("chat-header-data");
    if(header !=null && isHidden != null){
      isHidden.hidden = false;
      header.innerHTML = friend.name;

      this.choosenFriend.name=friend.name;
      this.choosenFriend.id=friend.id;
      this.choosenFriend.roomId=friend.roomId;
      
      this.websocketService.setRoomId(friend.roomId);
    }
    this.websocketService.getAllMessage(this.choosenFriend.roomId).subscribe((next)=>{
      
      let messageDisplay = document.getElementById("message-display");
      if(messageDisplay != null){
        messageDisplay.innerHTML = "";
      }
      for(let i = 0; i < next.length; i++){
        this.messages[i]= next[i];
          if(this.messages[i] != null && messageDisplay != null){
            let dialog ="";
            let myId = sessionStorage.getItem("id");
            if(this.messages[i].senderId == Number(myId)){
              
            dialog = `<div class="sent-dialog" style="display: flex;
            width: 100%;
            justify-content: end;
            margin-bottom: 10px;">
              <div class="sent-dialog-style" style="display: flex;
              flex-direction: column;
              max-width: 300px;
              background-color: rgba(4, 15, 22, 0.8);
              color:white;
              padding: 10px;
              text-align: right;
              border-radius: 7px;
              margin-top:5px;
              margin-right:2px;
              word-break: break-all;">
                <div>${this.messages[i]?.content}</div>
              </div>
            </div>`
            }
            else{
              dialog = `<div class="recieved-dialog" stlye="style= "display: flex;
              width: 100%;
              justify-content: start;
              margin-bottom: 10px;">
                <div class="recieved-dialog-style" style="display: flex;
                flex-direction: column;
                max-width: 300px;
                align-items: start;
                background-color: rgba(1, 186, 239);
                padding: 10px;
                text-align: left;
                border-radius: 7px;
                margin-top:5px;
                margin-left:2px;
                word-break: break-all;">
                  <div>${this.messages[i]?.content}</div>
                </div>
            </div>`
            }
            //const parentNode = document.createElement("div");
            //parentNode.classList.add("message-item-parent-me");
            
            messageDisplay.innerHTML += dialog;

            messageDisplay.scrollTop = messageDisplay.scrollHeight;
          }
      }
    })
    
  }

   ngOnInit(): void {
    const id = sessionStorage.getItem("id") || '{}';
    
    this.service.getUserNameById(Number(id)).subscribe((next)=>{
      
      this.myName = next;
      console.log(this.myName);
    })
    this.websocketService.getFriendList(Number(id)).subscribe((next) =>{
      for(let i = 0; i < next.length; i++){
        this.friends[i] = next[i];
      }
    });
    this.websocketService.getRooms(Number(id)).subscribe(
      (res) =>{
        console.log(res);
        this.websocketService.ids = res;
      });
  }
}
