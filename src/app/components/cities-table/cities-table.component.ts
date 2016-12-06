import { Component, Input } from '@angular/core';

import { IList } from '../../models/interfaces';

@Component({
    selector: 'cities-table',
    template: require('./cities-table.component.html'),
    styles: [require('./cities-table.component.scss')]
})

export class CitiesTable {
    @Input() weatherDataByPage: Array<Array<IList>> = [];
    @Input() citiesCount: number;
    @Input() pageMaxCount: number;

    page = 1;
}
