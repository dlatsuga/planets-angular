import {Component} from '@angular/core';
import {Planet, PlanetBuilder, PlanetService} from '../services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  private planet: Planet;

  constructor(private planetService: PlanetService) {
    this.planet = new PlanetBuilder()
      .setName('Naboo')
      .setPopulation(4500000000)
      .setDiameter(12120)
      .setClimate('temperate')
      .build();

    planetService.myPlanet$.subscribe((newPlanet: Planet) => {this.planet = newPlanet; });
  }

  log() {
    console.log('App works');
  }
}
