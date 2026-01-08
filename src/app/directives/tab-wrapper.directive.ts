import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[TabWrapper]'
})
export class TabWrapperDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
