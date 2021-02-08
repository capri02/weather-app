import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CityDisplayListComponent } from './city-display-list/city-display-list.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    CityDisplayListComponent,
    CityWeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
