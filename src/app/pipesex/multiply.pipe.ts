import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
  name:'multiply'
})
export class Multiply implements PipeTransform
{
        transform(val:number,pow:number):number
        {
           var result:number=1;
           for(var i:number=0;i<pow;i++)
           {
             result = result * val;
           }
           return result;
        }

}
