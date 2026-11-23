import { Component, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  // texte tapé dans la barre de recherche
  searchTerm = signal('');

  // id de la conférence dont on affiche les détails
  selectedId = signal(0);

  // liste des conférences
  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des technologies web modernes.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
    {
      // Conférence passée : elle ne doit PAS apparaître (filtre « à venir »)
      id: 4,
      title: 'TypeScript Day',
      description: 'Édition 2025, déjà terminée.',
      date: new Date(2025, 4, 10),
      place: 'Monastir',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ]);

  // retourne les conférences à venir dont le titre contient le texte recherché
  getConferences() {
    const today = new Date();
    const search = this.searchTerm().toLowerCase();
    return this.conferences().filter(
      c => c.date > today && c.title.toLowerCase().includes(search)
    );
  }

  // nombre de places restantes
  getPlaces(c: Conference) {
    return c.maxParticipants - c.nbParticipants;
  }

  // afficher ou cacher les détails
  showDetails(id: number) {
    if (this.selectedId() === id) {
      this.selectedId.set(0);
    } else {
      this.selectedId.set(id);
    }
  }

  // inscription : +1 participant
  register(c: Conference) {
    if (this.getPlaces(c) > 0) {
      c.nbParticipants++;
    }
  }
}