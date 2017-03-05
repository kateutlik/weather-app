import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { FormatTemperaturePipe } from '../pipes/index';

import { WeatherIconModule } from '../components/weather-icon/weather-icon.module';
import { WindDataModule } from '../components/wind-data/wind-data.module';

import { ColorWeather } from '../directives/color-weather.directive';
import { CityWeatherPipe } from '../pipes/city-weather.pipe';
import { WeatherService } from '../services/weather.service';


@NgModule({
    imports: [
        CommonModule,
        WeatherIconModule,
        WindDataModule
    ],
    declarations: [
        ColorWeather,

        FormatTemperaturePipe,
        CityWeatherPipe
    ],
    providers: [
        WeatherService
    ],
    exports: [
        WeatherIconModule,
        WindDataModule,

        ColorWeather,

        FormatTemperaturePipe,
        CityWeatherPipe,
    ],
    bootstrap: [  ]
})

export class WeatherModule { }
