import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { AppFooter } from './app-footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppFooter
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        AppFooter
    ]
})

export class AppFooterModule { }
