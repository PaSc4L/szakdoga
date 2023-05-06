import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import {over} from 'stompjs';
import { environment } from 'src/environments/environment';
import { Friend, FriendList, User } from 'src/app/dtos/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserServiceService } from '../userService/user-service.service';
@Injectable({
  providedIn: 'root'
})
export class WebsocketServiceService {

  public stompClient: any;
  ids: number[] = [];
  
//private socket$: WebSocketSubject<any>;

  constructor(private http:HttpClient, private service: UserServiceService) {
    
    this.connect();
  }

  connect(){
    const serverUrl = environment.url + "/ws";
    const ws = new SockJS(serverUrl);
    this.stompClient = over(ws);
    const that = this;
    console.log(this.stompClient);
    this.stompClient.connect({}, function (frame:any) {
      console.log('Connectred: '+ frame);
      that.stompClient.subscribe('/topic/public', function (publicShow:any){
        console.log(publicShow);
      })
      console.log('Connected: '+ frame);
      for (let i=0; i<that.ids.length; i++){
        that.stompClient.subscribe(`/topic-p/${that.ids[i]}/private`,function (showPrivate:any){
          console.log(showPrivate);
      })
      }
    });
  }
  
  getRooms(id: number): Observable<number[]>{
    console.log(id);
    return this.http.get<number[]>(`${environment.url}/friends/getAllRoomId/${id}`);
  }

  getFriendList(id: number){
    return this.http.get<Friend[]>(`${environment.url}/friends/getFriendList/${id}`);
  }

  addFriend(addFriend: FriendList){
    console.log(addFriend);
    return this.http.post<FriendList>(`${environment.url}/friends/addFriend`, addFriend).subscribe();
  }

  sendMessage(message: any){
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
    this.stompClient.send('/app/private-message' , {}, JSON.stringify(this.createMessageEntry(sender,reciever,message)));
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
