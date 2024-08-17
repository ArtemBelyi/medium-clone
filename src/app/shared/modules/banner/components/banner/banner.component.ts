import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from '../../../../services/web-socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mc-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  private messageSubscription: Subscription = new Subscription();
  constructor(
    private webSocketService: WebSocketService
  ) {}

  ngOnInit() {
    this.messageSubscription.add(
      this.webSocketService.getMessages().subscribe((data) => {
        if (data.topic === '/topic/favorites') {
          console.log("Received message for /topic/favorites:", data.message);
        } else if (data.topic === '/topic/recent') {
          console.log("Received message for /topic/recent:", data.message);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
