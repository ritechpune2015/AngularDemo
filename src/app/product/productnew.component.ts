import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { IProduct } from './product.interface';
import {ProductSVR} from "./product.service"

@Component({
  selector:'prodnew',
  templateUrl:'productnew.component.html',
  styleUrls:['productnew.component.css'],
  providers:[ProductSVR]
})
export class ProductNew
{

  constructor(private prodsvr:ProductSVR,private rt:Router)
   {

   }
  SaveProd(data:IProduct)
   {
      //alert("Save Product Method is Called!");
     // alert(JSON.stringify(data));
      //console.log(data);
      this.prodsvr.createProduct(data)
      .subscribe(
       (result) =>{
          alert("Product Saved!");
          this.rt.navigate(['/prod']);
       },
       (err) => alert("Error!")
      );
   }
}
