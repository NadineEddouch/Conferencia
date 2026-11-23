import { Component, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Friends } from './components/friends/friends';
import { Navbar } from './components/navbar/navbar';
import { Profil } from './components/profil/profil';
import { Notifications } from './components/notifications/notifications';
import { ConferenceList } from './components/conference-list/conference-list';


@Component({
  selector: 'app-root',
  imports: [Footer,Header,Friends,Navbar,Notifications,Profil,ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
