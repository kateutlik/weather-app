import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { SharedModule } from '../../modules/shared.module';
import { UserWeatherModule } from '../../components/user-weather/user-weather.module';
import { WeatherModule } from '../../modules/weather.module';

import { UserWeatherPage } from './user-weather-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        WeatherModule,

        UserWeatherModule
    ],
    declarations: [
        UserWeatherPage
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        UserWeatherPage
    ]
})

export class UserWeatherPageModule { }
