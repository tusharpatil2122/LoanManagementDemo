import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './template/visitors/visitors.component';
import { HomeComponent } from './template/home/home.component';
import { EmiCalculatorComponent } from './include/emi-calculator/emi-calculator.component';
import { EnquiryComponent } from './include/enquiry/enquiry.component';
import { SignInComponent } from './include/sign-in/sign-in.component';
import { AboutComponent } from './template/about/about.component';

const routes: Routes = [
  {path:"" ,redirectTo:"carLoan" ,pathMatch:'full'},
  {path:'carLoan' , component: VisitorsComponent , children:[
    {path:'home',component:HomeComponent},
    {path:'emi', component:EmiCalculatorComponent},
    {path:"enquiry",component:EnquiryComponent},
    {path:"sign-in",component:SignInComponent},
    {path:"about",component:AboutComponent}
]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}