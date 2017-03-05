import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import routes from './routes';

import { CoreModule } from './modules/core.module';

import { AppComponent } from './';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule,

        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
