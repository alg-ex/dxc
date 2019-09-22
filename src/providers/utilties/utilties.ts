import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Toast, ToastController } from 'ionic-angular';
/*
  Generated class for the UtiltiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtiltiesProvider {

  loading: any;
  
  constructor(
    public loadingCtrl: LoadingController,
    public toastController: ToastController) {
    console.log('Hello UtiltiesProvider Provider');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({});
    this.loading.present();
  }

  presentToast(mensaje) {
    let toast: Toast = this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present()
  }
}
