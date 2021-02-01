import {Directive,ElementRef } from '@angular/core';

@Directive({
  selector:'[bgcolor]'
})
export class BgColor
{
   constructor(private elref:ElementRef)
   {
       this.elref.nativeElement.style.backgroundColor='red';
       this.elref.nativeElement.style.color='white';
   }
}
