import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styles: []
})
export class DetailEmployeeComponent implements OnInit {

  constructor(private _service:EmployeeService) { }

  ngOnInit() {
  }

}
