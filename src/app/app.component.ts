import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  cnt:number=0;
  CountNumber():void
   {
    for(var i:number=0;i<20;i++)
     {
        if(i%2==0)
        this.cnt++;
     }
   }
}
