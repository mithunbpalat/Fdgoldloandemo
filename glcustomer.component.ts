import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FdgoldloandemoService } from '../fdgoldloandemo.service';
import { Glcustomer } from '../gglcustomer';
import { Search } from '../gsearch';

@Component({
  selector: 'app-glcustomer',
  templateUrl: './glcustomer.component.html',
  styleUrls: ['./glcustomer.component.css'],
})
export class GlcustomerComponent implements OnInit {

  glcustomer :any= new Glcustomer(0,"","","","","","","","","","","","","","","","",0,0,0,0,0,0,"");
  glcustomers: any;
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
    this.fileInfos = this.uploadService.getFiles1();
    let resp=this.service.getGlcustomers();
    resp.subscribe((data)=>this.glcustomers=data);
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload1(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles1();
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
  

  public glcustomerNow(){
    let resp = this.service.postGlcustomer(this.glcustomer);
    resp.subscribe((data)=>this.glcustomers=data);
  }
  public updateGlcustomerNow(){
    let resp = this.service.updateGlcustomer(this.glcustomer);
    resp.subscribe((data)=>this.glcustomers=data);
  }
  public delGlcustomer(glcid:number){
    let resp=this.service.deleteGlcustomer(glcid);
    resp.subscribe((data)=>this.glcustomers=data);
  }
  public searchById(a:number){
    let resp=this.service.getGlcustomerById(a);
    resp.subscribe((data)=>this.glcustomer=data);
  }


  public calculator(a:number, b:string){
    if(b == "24"){
      this.glcustomer.totalvalue=(a* 4869);
      this.glcustomer.loanamount= (a* 3651.75);
    }
    if(b == "22"){
      this.glcustomer.totalvalue=(a* 4769);
      this.glcustomer.loanamount= (a* 3576.75);
    }
    if(b == "20"){
      this.glcustomer.totalvalue=(a* 4155);
      this.glcustomer.loanamount= (a* 3116.25);
    }
    if(b == "18"){
      this.glcustomer.totalvalue=(a* 3739);
      this.glcustomer.loanamount= (a* 2804.25);
    }
  }
  public balanceCalculate(a: number,b: number,c: number){
    a= (a-b-c);
    b= (b+c);
    this.glcustomer.balance = a;
    this.glcustomer.moneyrepaid= b;
  }
  
  
  
  printComponent() {
      const printContents =  (<HTMLInputElement>document.getElementById("demo")).innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
 }

  
}
