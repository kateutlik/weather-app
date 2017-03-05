import { NgModule } from '@angular/core';
import { CommonModule } from'@angular/common';

import { WeatherIcon } from './weather-icon.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WeatherIcon
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        WeatherIcon
    ]
})

export class WeatherIconModule { }
