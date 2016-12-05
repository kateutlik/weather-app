import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';

import { WeatherService } from '../../services/weather-service';
import { IWeatherMap, IList } from '../../models/interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'cities',
    encapsulation: ViewEncapsulation.None,
    template: require('./cities.component.html')
})

export class Cities implements OnInit {
    weatherData: IList[];

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.weatherService.getWeather(position.coords.latitude, position.coords.longitude)
                    .subscribe((response:IWeatherMap) => {
                        this.weatherData = response.list;
                    });
            });
        }
    }
}
