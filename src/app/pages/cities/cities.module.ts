import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { CitiesTableModule } from '../../components/cities-table/cities-table.module';

import { Cities } from './cities.component';
import { SharedModule } from '../../modules/shared.module';
import { MapModule } from '../../components/map/map.module';
import { RxjsHomeworkModule } from '../../components/rxjs-homework/rxjs-homework.module';
import { UserWeatherModule } from '../../components/user-weather/user-weather.module';
import {WeatherModule} from '../../modules/weather.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        WeatherModule,

        CitiesTableModule,
        MapModule,
        RxjsHomeworkModule,
        UserWeatherModule
    ],
    declarations: [
        Cities
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        Cities
    ]
})

export class CitiesModule { }
