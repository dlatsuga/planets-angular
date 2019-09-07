import {Component} from '@angular/core';
import {UniverseService} from '../services/universe.service';

@Component({
  selector: 'app-inhabitants',
  templateUrl: './inhabitants.component.html',
  styleUrls: ['./inhabitants.component.css']
})
export class InhabitantsComponent{
  private inhabitants: Array<string>;

  constructor(private universeService: UniverseService) {

    universeService.observableInhabitants$
      .subscribe((newInhabitants: Array<string>) => {this.inhabitants = newInhabitants;});
  }
}
