import { Component, OnInit } from '@angular/core';
import { UserOption } from '../../../model/user-option';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent implements OnInit {

  constructor(private router:Router){}
  
  userButtons:any[];
   userType:string;

  ngOnInit(): void {
    this.userButtons = UserOption.userRoles;
    let userJson:string = localStorage.getItem('user');
    let user:any=JSON.parse(userJson);
    console.log(user);
    this.userType = user.user;
  }
         

  navigateTo(link:string){
    this.router.navigateByUrl('dashboard/'+this.userType+'/'+link)
  }

}
