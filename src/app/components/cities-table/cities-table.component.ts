import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IWeatherList } from '../../models/interfaces';

@Component({
    selector: 'cities-table',
    template: require('./cities-table.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./cities-table.component.scss')]
})

export class CitiesTable {
    @Input() weatherDataByPage: Array<Array<IWeatherList>> = [];
    @Input() citiesCount: number;
    @Input() pageMaxCount: number;
    @Input() lastUpdateTableDate: Object;

    page = 1;
}
