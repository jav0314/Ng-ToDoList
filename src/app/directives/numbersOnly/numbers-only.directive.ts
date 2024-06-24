import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnlyDirective {
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const numberOnly = /[^0-9]*/g;
    const initValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initValue.replace(numberOnly, '');
    if (initValue !== this.el.nativeElement.value) {
      event.stopPropagation;
    }
  }
}
