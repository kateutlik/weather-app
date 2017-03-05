import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable, Scheduler } from 'rxjs';

import { IUser } from '../../models/interfaces/index';

@Component({
    selector: 'rxjs-homework',
    templateUrl: 'rxjs-homework.component.html'
})

export class RxjsHomework {
    doctors: Array<string> = [];
    numbers: Array<{}> = [];

    constructor(http: Http) {
        let first = Observable
            .timer(10, 500).map(value => {
                return {source: '1', value: value};
            })
            .take(5)
            .observeOn(Scheduler.async);

        const users = http.get('http://jsonplaceholder.typicode.com/users/')
            .flatMap((response) => response.json())
            .delay(100)
            .filter((person: IUser) => person.id > 3)
            .take(5)
            .map((person: IUser) => "Dr. " + person.name)
            .subscribe((data) => {
                this.doctors.push(data);
            });

        let second = Observable
            .timer(10, 500).map(value => {
                return {source: '2', value: value};
            })
            .take(4);

        first
            .merge(second)
            .subscribe(res => this.numbers.push(res));
    }
}