import {Component} from '@angular/core';
import {Planet, PlanetService} from '../services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  private planet: string;
  private planet2: Planet;

  constructor(private planetService: PlanetService) {
    planetService.myString$.subscribe((newString: string) => {this.planet = newString; });
    planetService.myPlanet$.subscribe((newPlanet: Planet) => {this.planet2 = newPlanet; });
    planetService.emitCurrentState();
    console.log('PlanetComponent: ', this.planet);
    // this.planet2 = PlanetService.
  }
}
