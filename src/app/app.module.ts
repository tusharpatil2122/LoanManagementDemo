import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorsComponent } from './template/visitors/visitors.component';
import { UserDashBoardComponent } from './include/user-dash-board/user-dash-board.component';
import { EnquiryComponent } from './include/enquiry/enquiry.component';
import { EmiCalculatorComponent } from './include/emi-calculator/emi-calculator.component';
import { SignInComponent } from './include/sign-in/sign-in.component';
import { HomeComponent } from './template/home/home.component';
import { VisitorheaderComponent } from './include/visitorheader/visitorheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AboutComponent } from './template/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitorsComponent,
    UserDashBoardComponent,
    EnquiryComponent,
    EmiCalculatorComponent,
    SignInComponent,
    HomeComponent,
    VisitorheaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
