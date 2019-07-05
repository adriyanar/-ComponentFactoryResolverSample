import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[formContainer]',
})
export class formContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}