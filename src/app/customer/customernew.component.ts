import {Component,OnInit} from "@angular/core"
import {FormGroup,FormControl,Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {CustomerSvr} from "./customer.service"
import {evenCreditValidator} from "./evencreditval.validator"
@Component({
  selector:'custnew',
  templateUrl:'customernew.component.html',
  styleUrls:['customernew.component.css'],
  providers:[CustomerSvr]

})
export class CustomerNew implements
OnInit
{
   custfrm:any;
   constructor(private custsvr:CustomerSvr,private rt:Router)
   {}
   ngOnInit():void
   {
      this.custfrm = new FormGroup({
          CustomerName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
         /* BillingAddress:new FormGroup({
             AreaName:new FormControl(),s
             CityName:new FormControl(),
             PinCode:new FormControl()
          }), */
          Address:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
          EmailID:new FormControl(null,[Validators.required,Validators.email]),
          MobileNo:new FormControl(null,[Validators.required,Validators.pattern("^\\d{10}$")]),
          CreditLimit:new FormControl(null,[Validators.required,Validators.min(100),Validators.max(1000),evenCreditValidator])
      });
   }

   SaveCustomer():void
   {
     //console.log(this.custfrm.value);
      this.custsvr.CreateCustomer(this.custfrm.value)
      .subscribe(
        (result) => {
           alert("Customer Saved!");
           this.rt.navigate(['/customers/getcust']);
        },
        (err) => alert("Error:"+ err)
      );
   }

}
