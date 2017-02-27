import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IWeatherList, IWeatherMap, ICityWeather } from '../models/interfaces';

@Injectable()
export class WeatherService {
    private API_URL = 'http://api.openweathermap.org/data/2.5/';
    private API_KEY = '3801414355a652393fc513e2ceef2156';
    private API_CNT = 50;

    constructor(private http: Http) { }

    getWeather(lat: number, lon: number): Observable<IWeatherMap> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('lat', lat.toString());
        params.set('lon', lon.toString());
        params.set('cnt', this.API_CNT.toString());
        params.set('APPID', this.API_KEY);

        return this.http.get(this.API_URL + 'find', {
                search: params
            })
            .map(this.extractData);
    }

    getCityWeather(city: string): Observable<ICityWeather> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('q', city);
        params.set('APPID', this.API_KEY);

        return this.http.get(this.API_URL + 'weather', {
                search: params
            })
            .map(this.extractData);
    }

    private extractData(response: Response) {
        return response.json();
    }
}