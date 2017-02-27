import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Toast, ToasterService} from 'angular2-toaster/angular2-toaster';

import { WeatherService } from '../../services';
import { IWeatherMap, IWeatherList } from '../../models/interfaces';

@Component({
    selector: 'cities',
    encapsulation: ViewEncapsulation.None,
    template: require('./cities.component.html')
})

export class Cities implements OnInit {
    weatherDataByPage: Array<Array<IWeatherList>> = [];
    showLoader = false;
    lat: number;
    lng: number;
    citiesCount: number;
    lastUpdatedWeatherDataDate: Object;
    cityName: string = '';

    PAGE_MAX_COUNT = 10;

    constructor(private toasterService: ToasterService, private weatherService: WeatherService) {
    }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.showLoader = true;

                let toastConfig: Toast = {
                    type: '',
                    title: 'Load',
                    body: '',
                    showCloseButton: true,
                    timeout: 5000
                };

                this.weatherService.getWeather(this.lat, this.lng)
                    .subscribe((response: IWeatherMap) => {
                        let weatherData = response.list;

                        weatherData.sort((a, b) => {
                            return a.name.localeCompare(b.name);
                        });

                        this.citiesCount = weatherData.length;

                        for (let i = 0; i < this.citiesCount / this.PAGE_MAX_COUNT; i++) {
                            this.weatherDataByPage[i] = weatherData.slice(i * this.PAGE_MAX_COUNT, (i + 1) * this.PAGE_MAX_COUNT);
                        }

                        this.lastUpdatedWeatherDataDate = new Date();

                        this.showLoader = false;
                    }, () => {
                        this.showLoader = false;

                        toastConfig.type = 'error';
                        toastConfig.body = 'An error has occurred, please try again.';
                        this.toasterService.pop(toastConfig);
                    });
            });
        }
    }

    setCityName(value: string) {
        this.cityName = value;
    }
}
