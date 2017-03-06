import { NgModule } from '@angular/core';
import { CommonModule } from'@angular/common';

import { CitiesModule } from '../pages/cities/cities.module';
import { MapPageModule } from '../pages/map-page/map-page.module';
import { UserWeatherPageModule } from '../pages/user-weather-page/user-weather-page.module';

import { StorageService } from '../services/storage.service';

import { AppFooterModule } from '../components/app-footer/app-footer.module';
import { AppHeaderModule } from '../components/app-header/app-header.module';
import { MapModule } from '../components/map/map.module';

@NgModule({
    imports: [
        CommonModule,

        AppFooterModule,
        AppHeaderModule,
        MapModule,

        CitiesModule,
        MapPageModule,
        UserWeatherPageModule
    ],
    declarations: [

    ],
    providers: [
        StorageService
    ],
    exports: [
        AppFooterModule,
        AppHeaderModule,
        MapModule,

        CitiesModule,
        MapPageModule,
        UserWeatherPageModule
    ],
    bootstrap: [  ]
})

export class CoreModule { }
