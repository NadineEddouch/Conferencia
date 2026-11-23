import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Friend } from '../../Models/friend';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friends = signal<Friend[]>([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Amine' },
  ]);
}