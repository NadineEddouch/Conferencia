import { Component, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Friends } from './components/friends/friends';
import { Navbar } from './components/navbar/navbar';
import { Profil } from './components/profil/profil';
import { RouterOutlet } from '@angular/router';
import { Notifications } from './components/notifications/notifications';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Header,Friends,Navbar,Notifications,Profil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
