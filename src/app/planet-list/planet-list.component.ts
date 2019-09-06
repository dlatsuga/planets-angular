import {Component} from '@angular/core';
import {PlanetService} from '../services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent {

  constructor(private planetService: PlanetService) {
  }

  loadPlanet(planetName) {
    this.planetService.loadPlanet(planetName);
  }
}
