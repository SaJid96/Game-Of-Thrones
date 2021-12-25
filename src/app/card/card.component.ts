import { Component, OnInit,Input } from '@angular/core';
import { faDatabase, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;

  @Input() user;
  constructor() {}

  ngOnInit(): void {}
}
