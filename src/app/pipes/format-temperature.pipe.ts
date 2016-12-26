import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert Temperature (Kelvin = 'K', Celsius = 'C', Fahrenheit = 'F')
 * Takes a scaleFrom argument that defaults 'F' (Fahrenheit)
 * Takes a scaleTo argument that defaults 'C' (Celsius)
 * Usage:
 *   value | formatTemperature : scaleFrom : scaleTo
 * Example:
 *   {{ 2 |  formatTemperature:'F':'C'}}
 *   formats to: 1024
 */
@Pipe({name: 'formatTemperature'})
export class FormatTemperaturePipe implements PipeTransform {
    transform(value: number, scaleFrom: string = 'F', scaleTo: string = 'C'): Promise<number> {
        if (!value) return new Promise<number>(resolve => resolve(value));

        let convertedValue: number;

        switch (scaleFrom) {
            case 'F':
                if (scaleTo === 'C') {
                    // Fahrenheit to Celsius
                    convertedValue = value * 9 / 5 + 32;
                } else {
                    // Fahrenheit to Kelvin
                    convertedValue = (value + 459.67) * 9 / 5;
                }
                break;
            case 'C':
                if (scaleTo === 'K') {
                    // Celsius to Kelvin
                    convertedValue = value + 273.15;
                } else {
                    // Celsius to Fahrenheit
                    convertedValue = value * 1.8 + 32;
                }
                break;
            case 'K':
                if (scaleTo === 'C') {
                    // Kelvin to Celsius
                    convertedValue = value - 273.15;
                } else {
                    // Kelvin to Fahrenheit
                    convertedValue = value * 9 / 5 - 459.67;
                }
                break;
            default:
                convertedValue = value;

        }

        return new Promise<number>(resolve => resolve(convertedValue));
    }
}