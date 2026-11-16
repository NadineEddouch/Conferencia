import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal(['Nouvelle conférence ajoutée', 'Inscription confirmée']);
  visible = signal(false);

  toggle() {
    this.visible.update(v => !v);
  }
}