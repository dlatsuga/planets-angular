import {Observable, Subject} from 'rxjs';

export class PlanetService {
  planet: Planet;
  myPlanet$: Observable<Planet>;
  private planetSubject: Subject<Planet>;
  private _apiBase = 'https://swapi.co/api/planets/?search=';
  private planetImages = new Map([
    ['Naboo', 8],
    ['Tatooine', 11],
    ['Alderaan', 2 ]
  ]);

  constructor() {
    this.planetSubject = new Subject<Planet>();
    this.myPlanet$ = this.planetSubject.asObservable();
  }

  async loadPlanet(planetName: string) {
    const planetId = this.planetImages.get(planetName);
    const imageBase = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;

    const planetJson = await this.getPlanetData(planetName);
    this.planet = this.transformPlanet(planetJson)
      .setImageLink(imageBase)
      .build();
    this.planetSubject.next(this.planet);
  }

  getPlanetData = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`!!!!!Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  transformPlanet(planetJson) {
    const planetObj = planetJson.results[0];
    return new PlanetBuilder()
      .setName(planetObj.name)
      .setPopulation(planetObj.population)
      .setDiameter(planetObj.diameter)
      .setClimate(planetObj.climate)
  }
}

export class Planet {
  private _name: string;
  private _population: number;
  private _climate: string;
  private _diameter: number;
  private _imageLink: string;

  constructor(planetBuilder: PlanetBuilder) {
    this._name = planetBuilder.name;
    this._population = planetBuilder.population;
    this._climate = planetBuilder.climate;
    this._diameter = planetBuilder.diameter;
    this._imageLink = planetBuilder.imageLink;
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

  get imageLink(): string {
    return this._imageLink;
  }
}

export class PlanetBuilder {
  private _name: string;
  private _population: number;
  private _climate: string;
  private _diameter: number;
  private _imageLink: string;

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

  setImageLink(value: string) {
    this._imageLink = value;
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

  get imageLink(): string {
    return this._imageLink;
  }

  build() {
    return new Planet(this);
  }
}

