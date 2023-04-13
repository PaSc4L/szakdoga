import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketServiceService {

private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket(environment.url);
  }

  public sendMessage(message: string) {
    this.socket$.next(message);
  }

  public getMessages() {
    return this.socket$.asObservable();
  }
}
