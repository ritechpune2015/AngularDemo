import { Component,OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms"
import {ActivatedRoute,Router} from "@angular/router"
import {CustomerSvr} from "./customer.service"

@Component({
 selector:'CustEdit',
 templateUrl:'cusotmeredit.component.html',
 providers:[CustomerSvr]
})
export class CustomerEdit implements OnInit
{
  custfrm:any;
  CustomerID:number;
   constructor(private rt:Router, private fb:FormBuilder,private art:ActivatedRoute,private csvr:CustomerSvr)
   {}
   ngOnInit():void
   {
      this.custfrm = this.fb.group({
          CustomerID:[],
          CustomerName:[],
          Address:[],
          EmailID:[],
          MobileNo:[],
          CreditLimit:[]
      });

      this.art.paramMap.subscribe(
        (data) => this.CustomerID = +data.get('id'),
        (err) =>alert("Error")
      );
     // alert("Customre ID:"+ this.CustomerID);
      this.csvr.getCustomerbyID(this.CustomerID)
      .subscribe(
        (result) =>{
       //   alert(JSON.stringify(result));
         this.custfrm.patchValue({
           CustomerID:result.CustomerID,
           CustomerName:result.CustomerName,
           Address:result.Address,
           EmailID:result.EmailID,
           MobileNo:result.MobileNo,
           CreditLimit:result.CreditLimit
         });
        },
        (err) => alert("Error!")
      );
   }
   EditCustomer():void
   {
     //alert("Edited!");
     this.csvr.ModifyCustomer(this.custfrm.value)
     .subscribe(
        (result) => {
          alert("Customer Updated!");
          this.rt.navigate(['customers/getcust']);
        },
        (err) => alert("Error!")
     );
   }
}
