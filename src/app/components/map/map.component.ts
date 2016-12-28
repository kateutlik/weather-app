import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./map.component.scss')]
})

export class Map {
    @Input() lat: number = 53.966693;
    @Input() lng: number = 27.742595;
}
