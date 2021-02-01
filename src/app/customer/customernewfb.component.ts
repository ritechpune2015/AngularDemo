import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {CustomerSvr} from "./customer.service"
@Component({
  selector:'custnewfb',
  templateUrl:'customernewfb.component.html',
  providers:[CustomerSvr]
})
export class CustomerNewFB implements
OnInit
{
  custfrm:any;
  constructor(private fb:FormBuilder,private csvr:CustomerSvr,private rt:Router)
  {}
    ngOnInit():void
    {
    this.custfrm = this.fb.group(
      {
        CustomerName:["Ganesh",[Validators.required,Validators.maxLength(10)]],
        Address:[null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
        EmailID:[],
        MobileNo:[],
        Mobile:[],
        CreditLimit:[]
       }
      );
  }
  SaveCustomer():void
   {
     //alert("Called!");
     //console.log(this.custfrm.value);
      this.csvr.CreateCustomer(this.custfrm.value)
      .subscribe(
           (result) => {
 alert("Customer Created!");
 this.rt.navigate(['/customers/getcust']);
           },
           (err) => alert("Error!")
      );
   }
}
