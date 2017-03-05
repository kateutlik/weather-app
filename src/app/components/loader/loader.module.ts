import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { Loader } from './loader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Loader
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        Loader
    ]
})

export class LoaderModule { }
