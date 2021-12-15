import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees: any[];

  selCountRBtn: string = "All"

  constructor() { 
    this.employees = [
      {code: 'emp1', name:'Tom', gender:'Male'},
      {code: 'emp1', name:'Tom', gender:'Male'},
      {code: 'emp1', name:'Tom', gender:'Male'},
      {code: 'emp1', name:'Tom', gender:'Male'},
      {code: 'emp1', name:'Tom', gender:'Male'},
      {code: 'emp1', name:'Tom', gender:'Female'},
      {code: 'emp1', name:'Tom', gender:'Female'},
      {code: 'emp1', name:'Tom', gender:'Female'},
      {code: 'emp1', name:'Tom', gender:'Female'},
      {code: 'emp1', name:'Tom', gender:'Female'},
      {code: 'emp1', name:'Tom', gender:'Female'},
      {code: 'emp1', name:'Tom', gender:'Female'},

    ] 
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
  }


}
