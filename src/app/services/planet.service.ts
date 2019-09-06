import {Observable, Subject} from 'rxjs';

export class PlanetService {
  planet: Planet;
  myPlanet$: Observable<Planet>;
  private planetSubject: Subject<Planet>;
  private _apiBase = 'https://swapi.co/api/planets/?search=';
  private planetData = new Map([
    ['Naboo', `Naboo`],
    ['Tatooine', `Tatooine`],
    ['Alderaan', `Alderaan`]
  ]);

  constructor() {
    this.planetSubject = new Subject<Planet>();
    this.myPlanet$ = this.planetSubject.asObservable();
  }

  async loadPlanet(planetName: string) {
    const planetJson = await this.getResource(this.planetData.get(planetName));
    this.planet = this.transformPlanet(planetJson);
    this.planetSubject.next(this.planet);
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`!!!!!Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  transformPlanet(planetJson) {
    const planetObj = planetJson.results[0];
    console.log(planetObj, 'planetObj');
    return new PlanetBuilder()
      .setName(planetObj.name)
      .setPopulation(planetObj.population)
      .setDiameter(planetObj.diameter)
      .setClimate(planetObj.climate)
      .build();
  }
}

export class Planet {
  private _name: string;
  private _population: number;
  private _climate: string;
  private _diameter: number;

  constructor(planetBuilder: PlanetBuilder) {
    this._name = planetBuilder.name;
    this._population = planetBuilder.population;
    this._climate = planetBuilder.climate;
    this._diameter = planetBuilder.diameter;
  }

  get name(): string {
    return this._name;
  }

  get population(): number {
    return this._population;
  }

  get climate(): string {
    return this._climate;
  }

  get diameter(): number {
    return this._diameter;
  }
}

export class PlanetBuilder {
  private _name: string;
  private _population: number;
  private _climate: string;
  private _diameter: number;

  constructor() {}

  setName(value: string) {
    this._name = value;
    return this;
  }

  setPopulation(value: number) {
    this._population = value;
    return this;
  }

  setClimate(value: string) {
    this._climate = value;
    return this;
  }

  setDiameter(value: number) {
    this._diameter = value;
    return this;
  }

  get name(): string {
    return this._name;
  }

  get population(): number {
    return this._population;
  }

  get climate(): string {
    return this._climate;
  }

  get diameter(): number {
    return this._diameter;
  }

  build() {
    return new Planet(this);
  }
}

