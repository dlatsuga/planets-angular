import {Component} from '@angular/core';
import {Planet, PlanetService} from '../services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  private planet: Planet;

  constructor(private planetService: PlanetService) {
    this.planet = new Planet('Naboo', 10);
    planetService.myPlanet$.subscribe((newPlanet: Planet) => {this.planet = newPlanet; });
  }
}
