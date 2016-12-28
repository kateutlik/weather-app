import { Pipe, PipeTransform } from '@angular/core';

import { WeatherService } from '../services/weather-service';
import { Toast, ToasterService} from 'angular2-toaster/angular2-toaster';

import { IWeatherMap } from '../models/interfaces';

@Pipe({name: 'cityWeather', pure: false})
export class CityWeatherPipe implements PipeTransform {
    citiesWeatherMap: Object = {};

    constructor(private toasterService: ToasterService, private weatherService: WeatherService) {
    }

    transform(value: string): number {
        let cityName: string = value;
        let that = this;

        if (!cityName) return null;

        if (that.citiesWeatherMap[cityName] && that.isDataNotExpired(that.citiesWeatherMap[cityName].lastUpdateTime)) {
            let temp = that.citiesWeatherMap[cityName].data.main.temp;

            return temp;
        } else {
            let toastConfig: Toast = {
                type: '',
                title: 'Load',
                body: '',
                showCloseButton: true,
                timeout: 5000
            };

            this.weatherService.getCityWeather(cityName)
                .subscribe((response: IWeatherMap) => {
                    that.citiesWeatherMap[cityName] = {};
                    that.citiesWeatherMap[cityName].data = response;
                    that.citiesWeatherMap[cityName].lastUpdateTime = new Date();

                    let temp = that.citiesWeatherMap[cityName].data.main.temp;

                    return temp;
                }, () => {
                    toastConfig.type = 'error';
                    toastConfig.body = 'An error has occurred, please try again.';
                    this.toasterService.pop(toastConfig);
                });
        }
    }

    isDataNotExpired(time: Date) {
        let currentTime = new Date();

        return (Number(currentTime) - Number(time)) < 300000;
    }
}