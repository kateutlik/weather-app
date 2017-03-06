import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { MapPage } from './map-page.component';
import { SharedModule } from '../../modules/shared.module';
import { MapModule } from '../../components/map/map.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        MapModule,
    ],
    declarations: [
        MapPage
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        MapPage
    ]
})

export class MapPageModule { }
