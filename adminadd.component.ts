import { Component, OnInit } from '@angular/core';
import { FdgoldloandemoService } from '../fdgoldloandemo.service';
import { Admin } from '../gadmin';
import { Search } from '../gsearch';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {
  
  admin: any = new Admin(0,"","","");
  admins: any;
  search: any = new Search(0);
  constructor(private service:FdgoldloandemoService) { }

  ngOnInit(): void {
    let resp=this.service.getAdmins();
    resp.subscribe((data)=>this.admins=data);
  }

  public adminNow(){
    let resp = this.service.postAdmin(this.admin);
    resp.subscribe((data)=>this.admins=data);
  }
  public updateAdminNow(){
    let resp = this.service.updateAdmin(this.admin);
    resp.subscribe((data)=>this.admins=data);
  }
  public delAdmin(aid:number){
    let resp=this.service.deleteAdmin(aid);
    resp.subscribe((data)=>this.admins=data);
  }
  public searchById(a:number){
    let resp=this.service.getAdminById(a);
    resp.subscribe((data)=>this.admin=data);
  }
}
