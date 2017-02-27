import { Component, Input } from '@angular/core';

@Component({
    selector: 'wind-data',
    templateUrl: 'wind-data.component.html',
    styles: [require('./wind-data.component.scss')]
})

export class WindData {
    @Input() windSpeed: string;
    @Input() windDeg: number;
}
