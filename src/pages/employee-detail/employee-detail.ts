import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { UtiltiesProvider } from '../../providers/utilties/utilties';
import { Employee } from '../../models/employee';
import { EmployeeProvider } from '../../providers/employee/employee';
/**
 * Generated class for the EmployeeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-detail',
  templateUrl: 'employee-detail.html',
})
export class EmployeeDetailPage {

  index: number;
  employee: Employee;
  mode: number;
  isReadonly: boolean;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public employeeProvider: EmployeeProvider,
    public utiltiesProvider: UtiltiesProvider) {

      this.index = this.navParams.get("index");
      
      this.mode = this.navParams.get("mode");
      this.isReadonly = this.mode == 1 ? true : false;

      if(this.navParams.get("employee"))
        this.employee = this.navParams.get("employee") as Employee;
      else
        this.employee = {
          id: 0,
          employee_name: "",
          employee_salary: 0,
          employee_age: 0,
          profile_image: "",
        }
      
      console.log(this.employee);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetailPage');
    if(this.mode == 2)
      this.getEmployeeDetail(this.employee.id);
  }

  getEmployeeDetail(employeeId) {

    this.utiltiesProvider.showLoading();

    this.employeeProvider.getEmployeeDetail(employeeId).subscribe(
      data => {
        if(data){
          this.employee = data as Employee;
          console.log(this.employee);
          this.utiltiesProvider.loading.dismiss();
        }
      },
      err => {  
        console.log('Error', err);
        let mensaje = "No se han podido descargar los datos actualizados del empleado, puede trabajar con los datos locales o por favor, intentelo más tarde"
        this.utiltiesProvider.presentToast(mensaje);
        this.utiltiesProvider.loading.dismiss();
      }
    );
  }

  return(){
    this.viewCtrl.dismiss();
  }

  create(){

    this.utiltiesProvider.showLoading();

    this.employeeProvider.createEmployee(this.employee).subscribe(
      data => {
        if(data){
          console.log(data);
          this.utiltiesProvider.loading.dismiss();
          
          this.employee.id = data.id;
          this.employee.employee_name = data.name;
          this.employee.employee_salary = data.salary;
          this.employee.employee_age = data.age;

          let returnData = {
            index : this.index,
            employee: this.employee
          };
      
          let mensaje = "Se ha creado el registro del empleado correctamente"
          this.utiltiesProvider.presentToast(mensaje);

          this.viewCtrl.dismiss(returnData);
        }
      },
      err => {  
        console.log('Error', err);
        let mensaje = "No se ha podido crear el registro del empleado, por favor, intentelo más tarde"
        this.utiltiesProvider.presentToast(mensaje);
        this.utiltiesProvider.loading.dismiss();
      }
    );
  }

  update(){

    this.utiltiesProvider.showLoading();

    this.employeeProvider.updateEmployeeDetail(this.employee).subscribe(
      data => {
        if(data){
          console.log(data);
          this.utiltiesProvider.loading.dismiss();
          
          this.employee.employee_name = data.name;
          this.employee.employee_salary = data.salary;
          this.employee.employee_age = data.age;

          let returnData = {
            mode: this.mode,
            index: this.index,
            employee: this.employee
          };
      
          let mensaje = "Se han actualizado los datos del empleado correctamente"
          this.utiltiesProvider.presentToast(mensaje);

          this.viewCtrl.dismiss(returnData);
        }
      },
      err => {  
        console.log('Error', err);
        let mensaje = "No se han podido actualizar los datos del empleado, por favor, intentelo más tarde"
        this.utiltiesProvider.presentToast(mensaje);
        this.utiltiesProvider.loading.dismiss();
      }
    );
  }

  editEmployee(){
    this.mode = 2;
    this.isReadonly = false;
  }

  removeEmployee(){

    this.utiltiesProvider.showLoading();

    this.employeeProvider.deleteEmployee(this.employee.id).subscribe(
      data => {
        if(data.success){
          let mensaje = "Registro borrado correctamente"
          this.utiltiesProvider.presentToast(mensaje);
          
          this.utiltiesProvider.loading.dismiss();
          this.viewCtrl.dismiss(data.success);
        }
      },
      err => {  
        console.log('Error', err);
        let mensaje = "No se ha podido borrar el registro, por favor, intentelo más tarde"
        this.utiltiesProvider.presentToast(mensaje);
        this.utiltiesProvider.loading.dismiss();
      }
    );
  }

}
