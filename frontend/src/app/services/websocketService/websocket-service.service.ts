import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import {over} from 'stompjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/dtos/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebsocketServiceService {

  public stompClient: any;
  ids: number[] = [];
  
//private socket$: WebSocketSubject<any>;

  constructor(private http:HttpClient) {
    this.getRooms(17);
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
  
  getRooms(id: number){
    console.log(id);
    this.http.get<number[]>(`${environment.url}/friends/getAllRoomId/${id}`).subscribe((data) =>{
      this.ids= data;
    });
    console.log(this.ids);  
  }

  sendMessage(message: any){
    let sender:User ={
      id: 0,
      username: "",
      name: "Józsi",
      email: "",
      password: "",
      code: "",
      phone: "",
      birthDate: new Date()
    }
    let reciever:User ={
      id: 0,
      username: "",
      name: "Józsi",
      email: "",
      password: "",
      code: "",
      phone: "",
      birthDate: new Date()
    }
    this.stompClient.send('/app/private-message' , {}, JSON.stringify(this.createMessageEntry(sender,reciever,message)));
  }

  sendPublicMessage(message:any){
    let sender:User ={
      id: 0,
      username: "",
      name: "Józsi",
      email: "",
      password: "",
      code: "",
      phone: "",
      birthDate: new Date()
    }
    let reciever:User ={
      id: 0,
      username: "",
      name: "Józsi",
      email: "",
      password: "",
      code: "",
      phone: "",
      birthDate: new Date()
    }
    this.stompClient.send('/app/message', {}, JSON.stringify(this.createMessageEntry(sender,reciever,message)))
  }

  createMessageEntry(sender:User, reciever: User, message:string){
    return{
      senderId: sender?.id,
      recieverId: sender?.id,
      sender: sender?.name,
      reciever: sender?.name,
      content: message
    }
  }


}
