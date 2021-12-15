import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss'],
  // providers: [ EmployeeService ]
})
export class EmpComponent implements OnInit {
  employees: Employee[];
  selCountRBtn: string = "All"

  constructor(private _employeeService: EmployeeService) { 
    this.employees = [];    
  }
  onRBtnChange(onBValue:any): void {
    this.selCountRBtn = onBValue;
  }
  getEmpCount() {
    return this.employees.length;
  }
  getEmpMaleCount() {
    return this.employees.filter(e => e.gender === "Male").length;
  }
  getEmpFemaleCount() {
    return this.employees.filter(e => e.gender === "Female").length;
  }
  ngOnInit(): void {
    this.employees = this._employeeService.getEmployee();
  }


}
