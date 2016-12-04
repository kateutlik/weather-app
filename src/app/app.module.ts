import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import routes from './routes';

import { Cities } from './pages/cities';

import { AppComponent, providers } from './';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule
    ],
    declarations: [
        AppComponent,

        Cities
    ],
    providers: [
        ...providers
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
