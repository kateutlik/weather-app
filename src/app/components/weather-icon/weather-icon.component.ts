import { Component, Input } from '@angular/core';

@Component({
    selector: 'weather-icon',
    templateUrl: 'weather-icon.component.html',
    styles: [require('./weather-icon.component.scss')]
})

export class WeatherIcon {
    @Input() iconName: string;
}
