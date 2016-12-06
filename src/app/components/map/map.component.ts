import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [require('./map.component.scss')]
})

export class Map {
    @Input() lat: number = 53.966693;
    @Input() lng: number = 27.742595;
}
