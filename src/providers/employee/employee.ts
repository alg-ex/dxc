import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP } from "@ionic-native/http";

import { Global } from "../../global";
/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmployeeProvider {

  
  headers = {
    'Content-Type': 'application/json'
  };
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(public http: HTTP,
              public httpAngular: HttpClient) {
    console.log('Hello EmployeeProvider Provider');
  }


//Peticion utilizando angular
  getEmployeesList(): Observable<any> {
    
    return this.httpAngular.get(Global.ENDPOINT + Global.GET_EMPLOYEES_LIST, this.httpOptions);
      
  }

  //Peticion utilizando los plugins de Ionic
  refreshEmployeesList() {
    
    return this.http.get(Global.ENDPOINT + Global.GET_EMPLOYEES_LIST, {}, this.headers);
       
   }


   getEmployeeDetail(employeeId): Observable<any> {
    
    return this.httpAngular.get(Global.ENDPOINT + Global.GET_EMPLOYEE_DETAIL + employeeId, this.httpOptions);
      
  }

  createEmployee(employee): Observable<any> {

    let dataCreate = {
      "name":employee.employee_name,
      "salary":employee.employee_salary,
      "age":employee.employee_age
    };
    
    return this.httpAngular.post(Global.ENDPOINT + Global.POST_CREATE_EMPLOYEE, dataCreate, this.httpOptions);
      
  }

  updateEmployeeDetail(employee): Observable<any> {

    let dataUpdate = {
      "name":employee.employee_name,
      "salary":employee.employee_salary,
      "age":employee.employee_age
    };
    
    return this.httpAngular.put(Global.ENDPOINT + Global.PUT_UPDATE_EMPLOYEE + employee.id, dataUpdate, this.httpOptions);
      
  }

  deleteEmployee(employeeId): Observable<any> {
    
    return this.httpAngular.delete(Global.ENDPOINT + Global.DELETE_EMPLOYEE + employeeId, this.httpOptions);
      
  }
}
