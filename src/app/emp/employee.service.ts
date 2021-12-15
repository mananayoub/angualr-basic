import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployee() : Employee [] {
    return [
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
    ];
  }

  constructor() { }
}
