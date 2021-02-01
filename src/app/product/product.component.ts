import {Component,OnInit} from "@angular/core"
import {IProduct} from "./product.interface"
import {ProductSVR} from "./product.service"
import {ActivatedRoute,ParamMap} from "@angular/router"
@Component({
  selector:'prod',
  templateUrl:'product.component.html',
  providers:[ProductSVR]
})
export class Product implements OnInit
{
   titleflag:boolean;
  prods:IProduct [];
  childmessage:string;
  prodid:number;
  prodname:string;
  price:number;
  constructor(private prodsvr:ProductSVR,private art:ActivatedRoute)
  {}
  ngOnInit()
  {
    this.titleflag=true;
    this.prodsvr.getProducts().subscribe(
         (result)=> this.prods = result,
         (err) => alert("Error:"+ err)
    );

    this.art.paramMap.subscribe(
     (result:ParamMap)=>{
          this.prodid = +result.get('id');
          this.prodname = result.get("prdname");
          this.price=+result.get("price");
     },
     (err) => alert("Error")

    );
  }
  ShowMessage(msg:number):void
  {

    switch(msg)
    {
      case 1:
             this.childmessage ="Product is Bad To Purchase";
            break;
      case 2:
             this.childmessage ="Product is Still Bad To Purchase";
             break;
      case 3:
            this.childmessage ="Product is OK to Purchase";
            break;
      case 4:
        this.childmessage ="Product is Good to purchase";
        break;
      case 5:
          this.childmessage ="Product is Best to Purchase";
          break;
       default:
           this.childmessage ="No input!"; break;


    }
  }
   toggle():void
   {
     this.titleflag =!this.titleflag;
   }
}
