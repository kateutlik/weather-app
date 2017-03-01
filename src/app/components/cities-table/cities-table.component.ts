import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

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

    @Output() onUpdateData = new EventEmitter<number>();

    updateData() {
        this.onUpdateData.emit();
    }

    page = 1;
}
