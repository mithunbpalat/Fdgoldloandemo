import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { FdcustomerComponent } from './fdcustomer/fdcustomer.component';
import { FdcalculatorComponent } from './fdcalculator/fdcalculator.component';
import { GlcustomerComponent } from './glcustomer/glcustomer.component';
import { GlcalculatorComponent } from './glcalculator/glcalculator.component';
import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FdgoldloandemoService } from './fdgoldloandemo.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminaddComponent,
    FdcustomerComponent,
    FdcalculatorComponent,
    GlcustomerComponent,
    GlcalculatorComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FdgoldloandemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
