import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerfiedEnquiresComponent } from './view-verfied-enquires/view-verfied-enquires.component';

const routes: Routes = [
  { path:'add-enquiry' , component:AddEnquiryComponent},
  { path:'view-enquiry' , component:ViewEnquiryComponent},
  { path:'verfied-enquires', component:ViewVerfiedEnquiresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
