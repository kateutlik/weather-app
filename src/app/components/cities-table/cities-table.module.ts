import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { SharedModule } from '../../modules/shared.module';
import { WeatherModule } from '../../modules/weather.module';

import { CitiesTable } from './cities-table.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        WeatherModule
    ],
    declarations: [
        CitiesTable
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        CitiesTable
    ]
})

export class CitiesTableModule { }
