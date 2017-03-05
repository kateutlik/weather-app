import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { Map } from './map.component';

const GOOGLE_API_KEY = 'AIzaSyD-6vpqXPXDmQYs0EMjTDeH-JMMsfqB5W0';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: GOOGLE_API_KEY
        })
    ],
    declarations: [
        Map
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        Map
    ]
})

export class MapModule { }
