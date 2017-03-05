import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { SharedModule } from '../../modules/shared.module';

import { UserWeatherTableModule } from '../user-weather-table/user-weather-table.module';

import { UserWeather } from './user-weather.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        UserWeatherTableModule
    ],
    declarations: [
        UserWeather
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        UserWeather
    ]
})

export class UserWeatherModule { }
