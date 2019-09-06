import {Component} from '@angular/core';
import {PlanetService} from '../services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  private planet: string;

  constructor(private planetService: PlanetService) {
    planetService.myString$.subscribe((newString: string) => {this.planet = newString; });
    planetService.emitCurrentState();
    console.log('PlanetComponent: ', this.planet);
  }
}
