import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';
import { RouterModule } from '@angular/router';

import { AppHeader } from './app-header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
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
