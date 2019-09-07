import {Observable, Subject} from 'rxjs';
import {Planet, PlanetBuilder} from '../domain/planet';
import {Inhabitant, InhabitantBuilder} from '../domain/inhabitant';

export class UniverseService {
  planet: Planet;
  observablePlanet$: Observable<Planet>;
  private planetSubject: Subject<Planet>;

  private inhabitants: Array<string>;
  tmpInhabitants: Array<Inhabitant>;
  observableInhabitants$: Observable<Array<Inhabitant>>;
  private inhabitantsSubject: Subject<Array<Inhabitant>>;

  constructor() {
    this.planetSubject = new Subject<Planet>();
    this.observablePlanet$ = this.planetSubject.asObservable();

    this.inhabitantsSubject = new Subject<Array<Inhabitant>>();
    this.observableInhabitants$ = this.inhabitantsSubject.asObservable();
  }

  async loadPlanetInfo(planetName: string) {
    const planetId = Planet.getPlanetData().get(planetName).get('planetId');
    const imageBase = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;

    const planetJson = await this.getUniverseData('planets', planetName);
    this.planet = UniverseService.transformPlanet(planetJson)
      .setImageLink(imageBase)
      .build();

    this.inhabitants = <Array<string>>Planet.getPlanetData().get(planetName).get('planetInhabitants');
    this.tmp(this.inhabitants);

    this.planetSubject.next(this.planet);
    this.inhabitantsSubject.next(this.tmpInhabitants);
  }

  // TODO: rename
  async tmp(inhabitants) {
    this.tmpInhabitants = new Array<Inhabitant>(); //TODO: convert from global to local tmpInhabitants
    for (let inhabitant of inhabitants) {
      let inhabitantJson = await this.getUniverseData('species', inhabitant);
      let inh = UniverseService.transformInhabitant(inhabitantJson)
        .setImageLink('tmp_img')
        .build();
      this.tmpInhabitants.push(inh);
    }
  }


  getUniverseData = async (category, name) => {
    let _apiBase = `https://swapi.co/api/${category}/?search=${name}`;
    const res = await fetch(_apiBase);

    if (!res.ok) {
      throw new Error(`Could not fetch ${_apiBase}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };

  static transformPlanet(planetJson) {
    const planetObj = planetJson.results[0];
    return new PlanetBuilder()
      .setName(planetObj.name)
      .setPopulation(planetObj.population)
      .setDiameter(planetObj.diameter)
      .setClimate(planetObj.climate)
  }

  static transformInhabitant(inhabitantJson) {
    const inhabitantObj = inhabitantJson.results[0];
    return new InhabitantBuilder()
      .setName(inhabitantObj.name)
      .setLanguage(inhabitantObj.language)
      .setClassification(inhabitantObj.classification)
      .setAverageHeight(inhabitantObj.average_height)
      .setAverageLifespan(inhabitantObj.average_lifespan)
  }
}
