import { Component } from '@angular/core';

@Component({
  selector:'',
  templateUrl:'pipeex.component.html'
})
export class PipeEx
{
  str:string="Hello This is pipe!";
  //dt=new Date(2010,11,2);
  dt =new Date();
  salary:number=10000;
  discountpercentage:number=0.2;
  val:number=10;

}
