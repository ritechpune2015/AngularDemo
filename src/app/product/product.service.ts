import {IProduct} from "./product.interface"
import {HttpClient} from "@angular/common/http"
import { Injectable } from '@angular/core';
import {Observable, ObservedValuesFromArray} from "rxjs"
@Injectable()
export class ProductSVR
{
  url:string ="http://localhost:55738/api/productapi";
  constructor(private http:HttpClient)
  {}

  getProducts():Observable<IProduct []>
  {
    // Observable<HttpResponse>
    //Observable<IProduct[]>
    return this.http.get<IProduct []>(this.url);
  }
  createProduct(rec:IProduct):Observable<any>
  {
   return this.http.post(this.url,rec);
  }
}
