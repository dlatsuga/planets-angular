import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UniverseComponent } from './universe/universe.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { InhabitansComponent } from './inhabitans/inhabitans.component';
import { InhabitanComponent } from './inhabitan/inhabitan.component';

@NgModule({
  declarations: [
    AppComponent,
    UniverseComponent,
    PlanetComponent,
    PlanetListComponent,
    InhabitansComponent,
    InhabitanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
