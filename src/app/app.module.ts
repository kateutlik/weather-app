import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import routes from './routes';

import * as services from './services/index';
import * as pipes from './pipes/index';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './';

import { AppHeader } from './components/app-header';
import { AppFooter } from './components/app-footer';
import { CitiesTable } from './components/cities-table';
import { Loader } from './components/loader';
import { Map } from './components/map';

import { Cities } from './pages/cities';

const GOOGLE_API_KEY = 'AIzaSyD-6vpqXPXDmQYs0EMjTDeH-JMMsfqB5W0';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: GOOGLE_API_KEY
        }),
        ToasterModule
    ],
    declarations: [
        AppComponent,

        // Components
        AppHeader,
        AppFooter,
        CitiesTable,
        Loader,
        Map,

        // Pages
        Cities,

        // Pipes
        pipes.FormatTemperaturePipe,
        pipes.CityWeatherPipe
    ],
    providers: [
        services.WeatherService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
