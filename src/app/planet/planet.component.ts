import {Component} from '@angular/core';
import {Planet, PlanetBuilder, UniverseService} from '../services/universe.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  private planet: Planet;

  constructor(private universeService: UniverseService) {
    this.planet = new PlanetBuilder()
      .setName('Naboo')
      .setPopulation(4500000000)
      .setDiameter(12120)
      .setClimate('temperate')
      .build();

    universeService.observablePlanet$.subscribe((newPlanet: Planet) => {this.planet = newPlanet; });
  }

  log() {
    console.log('App works');
  }
}
