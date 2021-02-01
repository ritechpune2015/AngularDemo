import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {HttpClientModule} from "@angular/common/http"
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {Welcome} from "./welcome/welcome.component"
import {NotFound} from "./notfound/notfound.component"
import {Product} from "./product/product.component"
import {BgColor} from "./bgcolor/bgcolor.directive"
import { RatingStar } from "./star/star.component"
import {Customer} from "./customer/customer.component"
import {ProductNew} from "./product/productnew.component"
import {CustomerNew} from './customer/customernew.component'
import {CustomerNewFB} from "./customer/customernewfb.component"
import {CustomerEdit} from "./customer/customeredit.component"
import {PipeEx} from "./pipesex/pipeex.component"
import {Multiply} from "./pipesex/multiply.pipe";
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { SearchPipe } from './search.pipe';
import {SampleAnimComponent} from "./sample-anim/sample-anim.component"

@NgModule({
  declarations: [
    AppComponent,
    Welcome,
    NotFound,
    Product,
    BgColor,
    RatingStar,
    Customer,
    ProductNew,
    CustomerNew,
    CustomerNewFB,
    CustomerEdit,
    PipeEx,
    Multiply,
    TestComponent,
    SampleComponent,
    SearchPipe,
    SampleAnimComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
