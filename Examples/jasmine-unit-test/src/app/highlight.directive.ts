import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnChanges {
  defaultColor: string = 'yellow';

  @Input('highlight') bgColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor =
      this.bgColor || this.defaultColor;
  }
}
