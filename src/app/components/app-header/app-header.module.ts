import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { AppHeader } from './app-header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppHeader
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        AppHeader
    ]
})

export class AppHeaderModule { }
