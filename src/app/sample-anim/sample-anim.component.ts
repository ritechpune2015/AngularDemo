import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from "@angular/animations"
@Component({
  selector: 'app-sample-anim',
  templateUrl: './sample-anim.component.html',
  styleUrls: ['./sample-anim.component.css'],
  animations:[trigger("myanimation",
  [
     state("step1",style({
        backgroundColor:'red',
        width:'100px',
        height:'100px'
     })),
     state("step2",style({
        backgroundColor:'yellow',
        width:'200px',
        height:'200px'
     })),
     transition("step1<=>step2",animate('600ms'))
  ])]
})
export class SampleAnimComponent implements OnInit {
  state:string="step1"
  constructor() { }

  changestate():void
  {
     this.state = this.state=="step1"?"step2":"step1";
  }
  ngOnInit(): void {
  }

}
