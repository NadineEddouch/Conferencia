import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  items = signal(['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin']);
  active = signal('Accueil');

  select(item: string) {
    this.active.set(item);
  }
}