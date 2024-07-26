import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserType } from './Usertype.enum';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder, private adminService:LoginService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addEmployeeForm:FormGroup;
  userTypes = Object.values(UserType);

  nngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      empName: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      user: ['', Validators.required]
    });
    console.log(this.addEmployeeForm); 
  }

  onSubmit(): void {
    if (this.addEmployeeForm.valid) {
      this.adminService.postEmployee(this.addEmployeeForm.value).subscribe(
        response => {
          console.log('Employee added successfully', response);
        },
        error => {
          console.error('Error adding employee', error);
        }
      );
    }
  }
}
