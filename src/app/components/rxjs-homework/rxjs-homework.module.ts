import { NgModule } from '@angular/core';
import{ CommonModule } from'@angular/common';

import { RxjsHomework } from './rxjs-homework.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RxjsHomework
    ],
    providers: [
    ],
    bootstrap: [],
    exports: [
        RxjsHomework
    ]
})

export class RxjsHomeworkModule { }
