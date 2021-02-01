import {AbstractControl} from "@angular/forms"
export function evenCreditValidator(ctl:AbstractControl)
{
   var val =parseFloat(ctl.value);
   if(val % 2==0)
    return null;
  else
  {

      return {
        evenCredit: {
         evenCredit:val
      }
    };
  }

}

