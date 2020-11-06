import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styles: []
})
export class ListEmployeeComponent implements OnInit {
  employees: EmployeeModel[] = [];
  idEmployee:number;
  employee:EmployeeModel = new EmployeeModel();
  isArray:boolean;

  constructor(private _service:EmployeeService) { }

  ngOnInit() {
    
  }

  getEmployees()
  {
    if(this.idEmployee == undefined){
      this.isArray = true;
      this._service.getEmployees().subscribe((data) => {
        if(data != undefined)
        {
          this.employees = data;
        }
      },(error)=>{

      })
    }else{
      this.isArray = false;
      this._service.getEmployeeById(this.idEmployee).subscribe((data) => {
        if(data != undefined)
        {
          this.employee = data;
        }
      },(error) => {
        alert('Does not exist an employee with the id: ' + this.idEmployee);
      })
    }
    
  }

}
