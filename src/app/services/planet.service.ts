import {Observable, Subject} from 'rxjs';

export class PlanetService {
  testPlanetName = 'Naboo';
  planet: Planet;
  myString$: Observable<string>;
  myPlanet$: Observable<Planet>;
  private stringSubject: Subject<string>;
  private planetSubject: Subject<Planet>;


  constructor() {
    this.stringSubject = new Subject<string>();
    this.myString$ = this.stringSubject.asObservable();

    this.planetSubject = new Subject<Planet>();
    this.myPlanet$ = this.planetSubject.asObservable();
  }

  loadPlanet(planetName: string) {
    this.planet = new Planet(planetName, 2);
    this.planetSubject.next(this.planet);

    this.testPlanetName = planetName;
    console.log(this.testPlanetName);
    this.stringSubject.next(this.testPlanetName);
  }

  emitCurrentState(): void {
    this.stringSubject.next(this.testPlanetName);
  }
}

export class Planet {
  private _name: string;
  private _population: number;

  constructor(name: string, population: number) {
    this._name = name;
    this._population = population;
  }

  get name(): string {
    return this._name;
  }

  get population(): number {
    return this._population;
  }
}
