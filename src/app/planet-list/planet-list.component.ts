import {Component} from '@angular/core';
import {UniverseService} from '../services/universe.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent {

  constructor(private planetService: UniverseService) {
  }

  loadPlanet(planetName) {
    this.planetService.loadPlanetInfo(planetName);
  }
}
