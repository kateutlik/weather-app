import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Toast, ToasterService} from 'angular2-toaster/angular2-toaster';

import { WeatherService } from '../../services/index';
import { IWeatherMap, IWeatherList } from '../../models/interfaces/index';

@Component({
    selector: 'user-weather-page',
    encapsulation: ViewEncapsulation.None,
    template: require('./user-weather-page.component.html')
})

export class UserWeatherPage {
    cityName: string = '';

    constructor(private toasterService: ToasterService,
                private weatherService: WeatherService) {
    }

    setCityName(value: string) {
        this.cityName = value;
    }
}
