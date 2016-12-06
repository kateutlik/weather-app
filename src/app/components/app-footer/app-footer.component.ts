import { Component } from '@angular/core';

@Component({
    selector: '[app-footer]',
    template: require('./app-footer.component.html'),
    styles: [require('./app-footer.component.scss')]

})

export class AppFooter {
    year: number = new Date().getFullYear();
}
