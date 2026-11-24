import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  // reçu du parent (ConferenceList)
  conference = input<Conference | null>(null);

  // envoyé au parent quand on clique sur S'inscrire
  registered = output<Conference>();

  getPlaces(c: Conference) {
    return c.maxParticipants - c.nbParticipants;
  }
}