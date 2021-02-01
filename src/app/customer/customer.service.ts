import { AppModule } from '../app.module';
import {HttpClient} from "@angular/common/http"
import {ICustomer} from "./customer.interface"
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
@Injectable()
export class CustomerSvr
{
 url:string="http://localhost:55738/api/customerapi";
  constructor(private http:HttpClient)
  {}

  getCutomers():Observable<ICustomer []>
  {
     return this.http.get<ICustomer []>(this.url);
  }
  getCustomerbyID(id:number):Observable<ICustomer>
  {
     return this.http.get<ICustomer>(this.url+"/"+ id);
  }
  CreateCustomer(rec:ICustomer):Observable<any>
  {
     return this.http.post(this.url,rec);
  }
  ModifyCustomer(rec:ICustomer):Observable<any>
  {
     return this.http.put(this.url+"/"+ rec.CustomerID,rec);
  }
}
