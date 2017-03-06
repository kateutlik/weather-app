import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'map-page',
    encapsulation: ViewEncapsulation.None,
    template: require('./map-page.component.html')
})

export class MapPage implements OnInit {
    lat: number;
    lng: number;


    constructor() {
    }

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
}
