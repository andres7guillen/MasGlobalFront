import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Connections } from './conn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private con:Connections,
    private _http:HttpClient) { }

  getEmployees():Observable<any>{
    return this._http.get(this.con.urlEmployee + 'GetEmployees');
  }

  getEmployeeById(id:number):Observable<any>{
    return this._http.get(this.con.urlEmployee + id);
  }


}
