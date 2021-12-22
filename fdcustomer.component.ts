import { Component, OnInit } from '@angular/core';
import { Fdcustomer } from '../gfdcustomer';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FdgoldloandemoService } from '../fdgoldloandemo.service';
import { Search } from '../gsearch';

@Component({
  selector: 'app-fdcustomer',
  templateUrl: './fdcustomer.component.html',
  styleUrls: ['./fdcustomer.component.css']
})
export class FdcustomerComponent implements OnInit {

  fdcustomer: any= new Fdcustomer(0,"","","","","","","","","","","","","",0,0,"",0,"",0,0,"",0,"");
  fdcustomers: any;
  search: any = new Search(0);

    selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    message = '';
  
    fileInfos?: Observable<any>;
  
    constructor(private uploadService: FdgoldloandemoService, private service:FdgoldloandemoService) { }
  
    selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }
    ngOnInit(): void {
      this.fileInfos = this.uploadService.getFiles();
      let resp=this.service.getFdcustomers();
      resp.subscribe((data)=>this.fdcustomers=data);
    }
    upload(): void {
      this.progress = 0;
  
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
  
        if (file) {
          this.currentFile = file;
  
          this.uploadService.upload(this.currentFile).subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.uploadService.getFiles();
              }
            },
            error: (err: any) => {
              console.log(err);
              this.progress = 0;
  
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
  
              this.currentFile = undefined;
            }
          });
        }
  
        this.selectedFiles = undefined;
      }
    }
    

    public fdcustomerNow(){
      let resp = this.service.postFdcustomer(this.fdcustomer);
      resp.subscribe((data)=>this.fdcustomers=data);
    }
    public updateFdcustomerNow(){
      let resp = this.service.updateFdcustomer(this.fdcustomer);
      resp.subscribe((data)=>this.fdcustomers=data);
    }
    public delFdcustomer(fdcid:number){
      let resp=this.service.deleteFdcustomer(fdcid);
      resp.subscribe((data)=>this.fdcustomers=data);
    }
    public searchById(a:number){
      let resp=this.service.getFdcustomerById(a);
      resp.subscribe((data)=>this.fdcustomer=data);
    }

    public calculate(a:number, b:number, c:number){
      b=(b/4);
      b=(b/100);
      b=(b+1);
      c=(c/12);
      c=(c*4);
      b=(b ** c );
      b=(b-1);
      b= (b * a);
      this.fdcustomer.amountavailable= (b+a); 
    }
    public balance(x:number,y:number){
      x=x-y;
      this.fdcustomer.balance = x;
      this.fdcustomer.amountavailable= x;
      }

       
  printComponent() {
    const printContents =  (<HTMLInputElement>document.getElementById("demo")).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
}
