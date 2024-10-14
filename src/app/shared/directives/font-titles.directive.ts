import { Directive, ElementRef, AfterViewInit } from '@angular/core'; 

@Directive({
  selector: '[appFontTitles]'
})
export class FontTitlesDirective implements AfterViewInit {

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.applyStyles();
  }

  applyStyles(): void {
    this.el.nativeElement.style.fontSize = '20px';
    this.el.nativeElement.style.marginLeft = '60px';
  }
}