import { NgModule } from '@angular/core';
import { CommonModule } from'@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { LoaderModule } from '../components/loader/loader.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NgbModule.forRoot(),

        ToasterModule,
        LoaderModule
    ],
    declarations: [
    ],
    providers: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,

        NgbModule,

        ToasterModule,
        LoaderModule
    ],
    bootstrap: [  ]
})

export class SharedModule { }
