import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('./app.component.scss')
    ]
})

export class AppComponent {
    constructor() { }
}
