import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import * as Immutable from 'immutable';
import { List } from 'immutable';

import { CUserWeatherCity } from '../../models/index';

@Component({
    selector: 'user-weather-table',
    template: require('./user-weather-table.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./user-weather-table.component.scss')]
})

export class UserWeatherTable {
    @Input() cities: List<CUserWeatherCity>;

    @Output() onRemoveCity = new EventEmitter<number>();
    @Output() onSwitchFavorite = new EventEmitter<number>();

    switchFavorite(i: number) {
        this.onSwitchFavorite.emit(i);
    }

    removeCity(i: number) {
        this.onRemoveCity.emit(i);
    }
}
