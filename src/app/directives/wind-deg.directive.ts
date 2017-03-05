import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[windDeg]'
})

export class WindDeg {
    @Input() windDeg: number;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.transform = `rotate(${ this.windDeg }deg)`;
    }
}