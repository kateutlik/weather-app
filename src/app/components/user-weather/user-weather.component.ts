import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Toast, ToasterService } from 'angular2-toaster/angular2-toaster';

import * as Immutable from 'immutable';
import { List } from 'immutable';

import { IUserWeatherCityForStorage, ICityWeather } from '../../models/interfaces/index';
import { CUserWeatherCity } from '../../models/index';

import { StorageService, WeatherService } from '../../services/index';

@Component({
    selector: 'user-weather',
    template: require('./user-weather.component.html'),
    styles: [require('./user-weather.component.scss')]
})

export class UserWeather implements OnInit {
    addUserCityForm: FormGroup;
    userCity: FormControl;
    cities: List<CUserWeatherCity>;

    constructor(private weatherService: WeatherService,
                private storageService: StorageService,
                private builder: FormBuilder,
                private toasterService: ToasterService) {
    }

    ngOnInit() {
        this.cities = Immutable.List(this.getCityDataFromStorage()) as List<CUserWeatherCity>;

        this.userCity = new FormControl('', []);


        this.addUserCityForm = this.builder.group({
            userCity: this.userCity
        });
    }

    addCity() {
        let toastConfig: Toast = {
            type: '',
            title: 'Load',
            body: '',
            showCloseButton: true,
            timeout: 5000
        };

        this.weatherService.getCityWeather(this.userCity.value)
            .subscribe((response: ICityWeather) => {
                this.cities = this.cities.push(new CUserWeatherCity(response, false));
                this.storageService.setData('cities', this.cities.toJS());

                this.userCity.setValue('', {});
            }, () => {
                toastConfig.type = 'error';
                toastConfig.body = 'An error has occurred, please try again.';

                this.toasterService.pop(toastConfig);
            });

    }

    switchFavorite(index: number) {
        let city = this.cities.get(index);

        city = city.setFavorite(!city.getFavorite());

        this.cities = this.cities.set(index, city);
        this.storageService.setData('cities', this.cities.toJS());
    }

    removeCity(index: number) {
        this.cities = this.cities.delete(index);
        this.storageService.setData('cities', this.cities.toJS());
    }

    private getCityDataFromStorage(): Array<CUserWeatherCity> {
        let cities = this.storageService.getData<Array<IUserWeatherCityForStorage>>('cities') || [];

        return cities.map((city: IUserWeatherCityForStorage) => {
            return new CUserWeatherCity(city.weatherData, city.favorite);
        });
    }
}
