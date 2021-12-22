import { Component, OnInit } from '@angular/core';
import { FdgoldloandemoService } from '../fdgoldloandemo.service';
import { Admin } from '../gadmin';
import { Search } from '../gsearch';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  admin : any=new Admin(1,"","","");
  test : any=new Admin(1,"","","");
  response:any= new Search(0);
  respo:any= new Search(0);
  message:any;

  constructor(private service: FdgoldloandemoService) { }

  ngOnInit(): void {
  }

  public verify(tu: string,tp: string){
    let resp = this.service.login(tu,tp);
    resp.subscribe((data)=>this.message=data);
    if(tu && tp ){
      if(this.message == "authenticated successfully"){
      (<HTMLInputElement>document.getElementById("demo")).disabled=false;
      (<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
      (<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
    }
  }
}
  public searchById(tu:string){
    let resp=this.service.getAdminByUsername(tu);
    resp.subscribe((data)=>this.admin=data);
  }
  public te(au:string,tu:string,ap:string,tp:string){
    if(tu && tp ){
    if( tu==au && tp==ap){
      (<HTMLInputElement>document.getElementById("demo")).disabled=false;
      (<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
      (<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
    }
  }
}

}
