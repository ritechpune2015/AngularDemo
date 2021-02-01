import { Component, Input,EventEmitter,Output } from '@angular/core';
@Component({
  selector:'star',
  templateUrl:'star.component.html'
})
export class RatingStar
{
  @Input() //used to define a property as a input property.
  NoOfStars:number=5;
  @Output() notify=new EventEmitter<number>();

  ExecuteNotify(n:number)
  {
    //  alert(n);
     this.notify.emit(n);
  }
}
