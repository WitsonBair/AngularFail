import { Component } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification, Notifications } from '../../types';
import { NotificationComponent } from '../components/notification/notification.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NotificationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private notificationsService: NotificationsService) {}

  notifications: Notification[] = [];

  ngOnInit() {
    this.notificationsService
      .getNotifications('http://localhost:3000/notifications')
      .subscribe((notifications: Notifications) => {
        this.notifications = notifications.items;
      });
  }
}
