import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FdcalculatorComponent } from './fdcalculator/fdcalculator.component';
import { FdcustomerComponent } from './fdcustomer/fdcustomer.component';
import { GlcalculatorComponent } from './glcalculator/glcalculator.component';
import { GlcustomerComponent } from './glcustomer/glcustomer.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:"",redirectTo:"adminlogin",pathMatch:"full"},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"addadmin",component:AdminaddComponent},
  {path:"glcalculator",component:GlcalculatorComponent},
  {path:"fdcalculator",component:FdcalculatorComponent},
  {path:"fdcustomer",component:FdcustomerComponent},
  {path:"glcustomer",component:GlcustomerComponent},
  {path:"report",component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
