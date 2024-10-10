import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontTitles]'
})
export class FontTitlesDirective {

  constructor(private el:ElementRef) { }

  applyStyles():void{
    this.el.nativeElement.style.fontSize = '100px';
  }

}
