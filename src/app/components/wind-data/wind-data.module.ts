import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { WindData } from './wind-data.component';
import { WindDeg } from '../../directives/wind-deg.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WindData,

        WindDeg
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        WindData
    ]
})

export class WindDataModule { }
