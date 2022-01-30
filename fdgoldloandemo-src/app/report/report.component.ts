import { Component, OnInit } from '@angular/core';
import { FdgoldloandemoService } from '../fdgoldloandemo.service';
import { Fdcustomer } from '../gfdcustomer';
import { Glcustomer } from '../gglcustomer';
import { Search } from '../gsearch';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  fdcustomer: any= new Fdcustomer(0,"","","","","","","","","","","","","",0,0,"",0,"",0,0,"",0,"");
  fdcustomers: any;
  glcustomer :any= new Glcustomer(0,"","","","","","","","","","","","","","","","",0,0,0,0,0,0,"");
  glcustomers: any; 
  glcust :any= new Glcustomer(0,"","","","","","","","","","","","","","","","",0,0,0,0,0,0,"");
  glcusts: any;
  search: any = new Search(0);
  sear: any = new Search(0);
  se: any = new Search(0);  
  constructor(private service:FdgoldloandemoService) { }

  ngOnInit(): void {
    let resp=this.service.getGlcustomers();
    resp.subscribe((data)=>this.glcustomers=data);

    let respon=this.service.getGlcustomers();
    respon.subscribe((data)=>this.glcusts=data);

    let respo=this.service.getFdcustomers();
      respo.subscribe((data)=>this.fdcustomers=data);
  }


  public searchGlBydate(a:string){
    let resp=this.service.getGlcustomerByDate(a);
    resp.subscribe((data)=>this.glcustomers=data);
  }
  public searchGlBymonth(a:string){
    let resp=this.service.getGlcustomerByMonth(a);
    resp.subscribe((data)=>this.glcustomers=data);
  }
  public searchGlByyear(a:string){
    let resp=this.service.getGlcustomerByYear(a);
    resp.subscribe((data)=>this.glcustomers=data);
  }
  public delGlcustomer(glcid:number){
    let resp=this.service.deleteGlcustomer(glcid);
    resp.subscribe((data)=>this.glcustomers=data);
  }



  public searchFdBydate(a:string){
    let resp=this.service.getFdcustomerByDate(a);
    resp.subscribe((data)=>this.fdcustomers=data);
  }
  public searchFdBymonth(a:string){
    let resp=this.service.getFdcustomerByMonth(a);
    resp.subscribe((data)=>this.fdcustomers=data);
  }
  public searchFdByyear(a:string){
    let resp=this.service.getFdcustomerByYear(a);
    resp.subscribe((data)=>this.fdcustomers=data);
  }
  public delFdcustomer(fdcid:number){
    let resp=this.service.deleteFdcustomer(fdcid);
    resp.subscribe((data)=>this.fdcustomers=data);
  }
}
