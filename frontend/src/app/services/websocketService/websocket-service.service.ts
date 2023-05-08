import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import {over} from 'stompjs';
import { environment } from 'src/environments/environment';
import { ChatMessage, Friend, FriendList, User } from 'src/app/dtos/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserServiceService } from '../userService/user-service.service';
@Injectable({
  providedIn: 'root'
})
export class WebsocketServiceService {

  public stompClient: any;
  ids: number[] = [];
  roomId: number = 0;
  previousChannel: any;
  
//private socket$: WebSocketSubject<any>;

  constructor(private http:HttpClient, private service: UserServiceService) {
    this.connect();
  }

  setRoomId(id:number){
    if(this.previousChannel)this.previousChannel.unsubscribe();
    this.roomId=id;
    this.connect();
  }

  connect(){
    const serverUrl = environment.url + "/ws";
    const ws = new SockJS(serverUrl);
    this.stompClient = over(ws);
    const that = this;
    console.log(this.stompClient);
    
    this.stompClient.connect({}, function (frame:any) {
      console.log('Connected: '+ frame);
        that.previousChannel=that.stompClient.subscribe(`/topic-p/${that.roomId}/private`,function (showPrivate:any){
          console.log(showPrivate);
          let newMessage = JSON.parse(showPrivate.body);
          let messageDisplay = document.getElementById("message-display");
          console.log(messageDisplay);
          if(newMessage?.content != null && messageDisplay != null){
            let dialog ="";
            let myId = sessionStorage.getItem("id");
            if(newMessage.senderId == Number(myId)){
              
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
                <div>${newMessage?.content}</div>
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
                  <div>${newMessage?.content}</div>
                </div>
            </div>`
            }
            //const parentNode = document.createElement("div");
            //parentNode.classList.add("message-item-parent-me");
            
            messageDisplay.innerHTML += dialog;

            messageDisplay.scrollTop = messageDisplay.scrollHeight;
          }
        })
    });
  }
  
  getRooms(id: number): Observable<number[]>{
    return this.http.get<number[]>(`${environment.url}/friends/getAllRoomId/${id}`);
  }

  getFriendList(id: number){
    return this.http.get<Friend[]>(`${environment.url}/friends/getFriendList/${id}`);
  }

  addFriend(addFriend: FriendList){
    console.log(addFriend);
    return this.http.post<FriendList>(`${environment.url}/friends/addFriend`, addFriend).subscribe();
  }

  sendMessage(message: ChatMessage){
    this.stompClient.send('/app/private-message' , {}, JSON.stringify(message));
  }

  saveMessage(message: ChatMessage){
    return this.http.post<ChatMessage>(`${environment.url}/user/saveMessage`, message).subscribe();
  }

  getAllMessage(roomId: number){
    return this.http.get<ChatMessage[]>(`${environment.url}/user/getRoomMessages/${roomId}`);
  }

  sendPublicMessage(message:any){
    let sender:User ={
      id: 0,
      name: "Józsi",
      email: "",
      password: "",
      phone: "",
      birthdate: ""
    }
    let reciever:User ={
      id: 0,
      name: "Józsi",
      email: "",
      password: "",
      phone: "",
      birthdate: ""
    }
    this.stompClient.send('/app/message', {}, JSON.stringify(this.createMessageEntry(sender,reciever,message)))
  }

  createMessageEntry(sender:User, reciever: User, message:string){
    return{
      senderId: sender?.id,
      recieverId: reciever?.id,
      roomId: 20,
      sender: sender?.name,
      reciever: reciever?.name,
      content: message
    }
  }


}
