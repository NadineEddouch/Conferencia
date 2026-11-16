import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  name = signal('Ahmed');
  email = signal('ahmed@email.com');
}