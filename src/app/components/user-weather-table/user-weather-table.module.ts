import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { WeatherModule } from '../../modules/weather.module';

import { UserWeatherTable } from './user-weather-table.component';

@NgModule({
    imports: [
        CommonModule,
        WeatherModule
    ],
    declarations: [
        UserWeatherTable
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        UserWeatherTable
    ]
})

export class UserWeatherTableModule { }
