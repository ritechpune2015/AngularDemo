import {Component} from "@angular/core"
@Component({
  selector:'wel',
  templateUrl:'welcome.component.html',
  styleUrls:['welcome.component.css']

})
export class Welcome{
   pageTitle:string ="New Welcome Title";
   flag:boolean=false;
   a:number=12;
   b:number=20;
   toggle():void
    {
      this.flag=!this.flag;
    }
   SayHello():string
   {
      return "Hello! Message";
   }
   display(el:HTMLInputElement):void
   {
      alert(el.value);
   }
   func():void{
     alert("Fun is Called!");
   }
}
