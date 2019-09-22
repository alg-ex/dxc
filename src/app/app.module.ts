import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http'
import { EmployeePage } from '../pages/employee/employee';
import { EmployeeProvider } from '../providers/employee/employee';
import { EmployeeDetailPage } from '../pages/employee-detail/employee-detail';
import { UtiltiesProvider } from '../providers/utilties/utilties';

@NgModule({
  declarations: [
    MyApp,
    EmployeePage,
    EmployeeDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmployeePage,
    EmployeeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    EmployeeProvider,
    UtiltiesProvider
  ]
})
export class AppModule {}
