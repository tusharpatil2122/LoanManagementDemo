import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private adminService: LoginService) { }

  employees: any[] = [];

  ngOnInit(): void {
    this.fetchAllEmployees();
  }

  fetchAllEmployees(): void {
    this.adminService.getAllData().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employee data', error);
      }
    );
  }



}
