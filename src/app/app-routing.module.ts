import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customer } from './customer/customer.component';
import { NotFound } from './notfound/notfound.component';
import { Product } from './product/product.component';
import { Welcome } from './welcome/welcome.component';
import {ProductNew} from './product/productnew.component'
import {CustomerNew} from './customer/customernew.component'
import { CustomerNewFB } from './customer/customernewfb.component';
import {CustomerEdit} from './customer/customeredit.component'
import {PipeEx} from './pipesex/pipeex.component'
import {SampleAnimComponent} from "./sample-anim/sample-anim.component"
const routes: Routes = [
  {path:'customers/getcust',component:Customer},
  {path:'prod',component:Product},
  {path:'prodnew',component:ProductNew},
  {path:'pipeex',component:PipeEx},
  {path:'home/wel',component:Welcome},
  {path:'custnew',component:CustomerNew},
  {path:'sampleanim',component:SampleAnimComponent},
  {path:'custedit/:id',component:CustomerEdit},
  {path:'custnewfb',component:CustomerNewFB},
  {path:'',redirectTo:'home/wel',pathMatch:'full'},
  {path:'**',component:NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
