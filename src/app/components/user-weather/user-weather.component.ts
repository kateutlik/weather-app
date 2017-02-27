import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import * as Immutable from 'immutable';
import { List } from 'immutable';

import { IWeatherList, IWeatherMap, ICityWeather, IUserWeatherCityForStorage } from '../../models/interfaces/index';
import { CUserWeatherCity } from "../../models/index";

import { StorageService, WeatherService } from '../../services/index';

import { Toast, ToasterService } from 'angular2-toaster/angular2-toaster';

@Component({
    selector: 'user-weather',
    template: require('./user-weather.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./user-weather.component.scss')]
})

export class UserWeather implements OnInit {
    cities: List<CUserWeatherCity>;
    addUserCityForm: FormGroup;
    city: FormControl;

    constructor(private storageService: StorageService,
                private weatherService: WeatherService,
                private toasterService: ToasterService,
                private builder: FormBuilder) {

    }

    ngOnInit() {
        // todo: Add handel for data from local storage to create CUserWeatherCity instance
        this.cities = Immutable.List(this.getCityDataFromStorage()) as List<CUserWeatherCity>;

        this.city = new FormControl('', []);


        this.addUserCityForm = this.builder.group({
           city: this.city
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

        this.weatherService.getCityWeather(this.city.value)
            .subscribe((response: ICityWeather) => {
                this.cities = this.cities.push(new CUserWeatherCity(response, false));
                debugger;
                this.storageService.setData('cities', this.cities.toJS());

                this.city.setValue('');
            }, () => {
                toastConfig.type = 'error';
                toastConfig.body = 'An error has occurred, please try again.';

                this.toasterService.pop(toastConfig);
            });

    }

    switchFavorite(index: number) {
        let city = this.cities.get(index);

        debugger;

        city = city.setFavorite(!city.getFavorite());

        this.cities.set(index, city);
        this.storageService.setData('cities', this.cities.toJS());
    }

    removeCity(index: number) {
        this.cities = this.cities.delete(index);
        this.storageService.setData('cities', this.cities.toJS());
    }


    private getCityDataFromStorage(): Array<CUserWeatherCity> {
        let cities = this.storageService.getData('cities') || [];

        debugger;

        cities.map((city: IUserWeatherCityForStorage) => {
            return new CUserWeatherCity(city.weatherData, city.favorite);
        });

        return cities;
    }
}
