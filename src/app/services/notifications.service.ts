import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Notifications } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private apiService: ApiService) {}

  getNotifications = (url: string): Observable<Notifications> => {
    return this.apiService.get(url);
  };
}
