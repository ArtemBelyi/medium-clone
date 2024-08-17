import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: any;
  private stompClient: any;
  private retryInterval = 5000; // Интервал для повторного подключения (5 секунд)
  private messageSubject: Subject<any> = new Subject<any>();

  constructor() {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection(): void {
    this.socket = new SockJS("http://localhost:8081/browser/ws");
    this.stompClient = Stomp.over(this.socket);

    this.stompClient.connect({},
      () => {
        console.log("WebSocket connected");
        this.subscribeToTopics(); // Подписываемся после подключения
      },
      (error: any) => {
        console.log("WebSocket connection error:", error);
        this.retryConnection();
      }
    );
  }

  private subscribeToTopics(): void {
    this.subscribeToTopic("/topic/favorites");
    this.subscribeToTopic("/topic/recent");
  }

  private subscribeToTopic(topic: string): void {
    this.stompClient.subscribe(topic, (message: any) => {
      console.log(`Message received on ${topic}:`, message.body);
      this.messageSubject.next({ topic, message: message.body });
    });
  }

  public getMessages(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  private retryConnection(): void {
    console.log(`Reconnecting in ${this.retryInterval / 1000} seconds...`);
    setTimeout(() => {
      this.initializeWebSocketConnection();
    }, this.retryInterval);
  }
}
