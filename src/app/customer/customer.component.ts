import { Component,OnInit } from '@angular/core';
import { ICustomer } from './customer.interface';
import {CustomerSvr} from "./customer.service"
@Component({
  selector:'cust',
  templateUrl:'customer.component.html',
  providers:[CustomerSvr]
})
export class Customer implements OnInit
{
  Custs:ICustomer [];
  constructor(private custsvr:CustomerSvr)
  {}

  ngOnInit():void
  {
     this.custsvr.getCutomers()
     .subscribe(
       (result) => this.Custs = result,
       (err) => alert("Error" + err)
     );
  }
}
