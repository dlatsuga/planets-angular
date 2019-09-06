import {Observable, Subject} from 'rxjs';

export class PlanetService {
  testPlanetName = 'test000';
  myString$: Observable<string>;
  private stringSubject: Subject<string>;

  constructor() {
    this.stringSubject = new Subject<string>();
    this.myString$ = this.stringSubject.asObservable();
  }

  loadPlanet(planetName) {
    this.testPlanetName = planetName;
    console.log(this.testPlanetName);
    this.stringSubject.next(this.testPlanetName);
  }

  emitCurrentState(): void {
    this.stringSubject.next(this.testPlanetName);
  }
}
