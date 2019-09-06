import {Observable, Subject} from 'rxjs';

export class PlanetService {
  planet: Planet;
  myPlanet$: Observable<Planet>;
  private planetSubject: Subject<Planet>;

  constructor() {
    this.planetSubject = new Subject<Planet>();
    this.myPlanet$ = this.planetSubject.asObservable();
  }

  loadPlanet(planetName: string) {
    this.planet = new Planet(planetName, 2);
    this.planetSubject.next(this.planet);
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
