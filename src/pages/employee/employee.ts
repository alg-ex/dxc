import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UtiltiesProvider } from '../../providers/utilties/utilties';
import { EmployeeProvider } from '../../providers/employee/employee';
import { Employee } from '../../models/employee';
import { EmployeeDetailPage } from '../employee-detail/employee-detail';
/**
 * Generated class for the EmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  employeeList: Employee[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public employeeProvider: EmployeeProvider,
    public modalCtrl: ModalController,
    public utiltiesProvider: UtiltiesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }

  ionViewWillEnter() {
    this.getEmployeeList();
  }

  //Peticion utilizando angular
  getEmployeeList() {

    this.utiltiesProvider.showLoading();

    this.employeeProvider.getEmployeesList().subscribe(
      data => {
        if(data){
          this.employeeList = data as Employee[];
          this.employeeList.reverse();
          
          this.utiltiesProvider.loading.dismiss();
        }
      },
      err => {  
        console.log('Error', err);
        let mensaje = "No se ha podido descargar el listado de empleados, por favor, intentelo más tarde"
        this.utiltiesProvider.presentToast(mensaje);
        this.utiltiesProvider.loading.dismiss();
      }
    );
  }

  //Peticion utilizando los plugins de Ionic
  refreshEmployeeList(event) {
    
    this.employeeProvider.refreshEmployeesList().then((data) => {
      
      if(data.data){
        this.employeeList = JSON.parse(data.data) as Employee[];
        this.employeeList.reverse();
      }
      event.complete();

    }).catch(err => {
      console.log('Error', err);
      let mensaje = "No se ha podido descargar el listado de empleados, por favor, intentelo más tarde"
      this.utiltiesProvider.presentToast(mensaje);
      event.complete();
      }); 
  }

  seeDetails(mode, index?, employee?){

    let modal = this.modalCtrl.create(EmployeeDetailPage, {mode: mode , index: index, employee: employee});
    
    modal.present();

    modal.onDidDismiss(returnData =>{
      if (returnData){
        if(returnData.mode == 2)
          this.employeeList[returnData.index] = returnData.employee as Employee;
        else
          this.getEmployeeList();
      }
    })
  }

  removeEmployee(employeeId){

    this.utiltiesProvider.showLoading();

    this.employeeProvider.deleteEmployee(employeeId).subscribe(
      data => {
        if(data.success){
          let mensaje = "Registro borrado"
          this.utiltiesProvider.presentToast(mensaje);
          
          this.utiltiesProvider.loading.dismiss();
          this.getEmployeeList();
        }
      },
      err => {  
        console.log('Error', err);
        let mensaje = "No se ha podido borrar el registro"
        this.utiltiesProvider.presentToast(mensaje);
        this.utiltiesProvider.loading.dismiss();
      }
    );
  }

}
