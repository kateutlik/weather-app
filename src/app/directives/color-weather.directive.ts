import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[colorWeather]'
})
export class ColorWeather {
    @Input('colorWeather') temp: number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.getColor(this.temp)
    }

    getColor(temp: number): string {
        // Map the temperature to a 0-1 range
        let a = (temp + 30) / 60;
        a = (a < 0) ? 0 : ((a > 1) ? 1 : a);

        // Scrunch the green/cyan range in the middle
        let sign = (a < .5) ? -1 : 1;
        a = sign * Math.pow(2 * Math.abs(a - .5), .35) / 2 + .5;

        // Linear interpolation between the cold and hot
        let h0 = 259;
        let h1 = 12;
        let h = (h0) * (1 - a) + (h1) * (a);

        return 'hsl(' + [h, '75%', '90%'] + ')';
    }
}