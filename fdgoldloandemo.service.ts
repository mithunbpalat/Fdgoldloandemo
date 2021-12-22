import { Injectable } from '@angular/core';
import { Admin } from './gadmin';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fdcustomer } from './gfdcustomer';
import { Glcustomer } from './gglcustomer';


@Injectable({
  providedIn: 'root'
})
export class FdgoldloandemoService {
  private baseUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }




  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      headers,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get(`${this.baseUrl}/files`,{headers});
  }




  public postAdmin(admin: Admin){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postadmin",admin,{headers,responseType:'text' as 'json'});
  }
  public updateAdmin(admin: Admin){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateadmin",admin,{headers,responseType:'text' as 'json'});
  }
  public getAdmins(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getalladmins",{headers});
  }
  public getAdminById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getadminbyid?aid="+a,{headers});
  }
  public deleteAdmin(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteadminbyid?aid="+a,{headers});
  }




  upload1(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload1`, formData, {
      headers,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles1(): Observable<any> {
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get(`${this.baseUrl}/files1`,{headers});
  }



  
  public getAdminByUsername(a:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getadminbyusername?username="+a,{headers});
  }
  public login(username:string,password:string){
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/",{headers,responseType:'text' as 'json'});
  }
  public getUsers(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getUsers",{headers});
  }



  public getGlcustomerByDate(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getglcustomerbydate?date="+a,{headers});
  }
  public getGlcustomerByMonth(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getglcustomerbymonth?month="+a,{headers});
  }
  public getGlcustomerByYear(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getglcustomerbyyear?year="+a,{headers});
  }
  public getFdcustomerByDate(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getfdcustomerbydate?date="+a,{headers});
  }
  public getFdcustomerByMonth(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getfdcustomerbymonth?month="+a,{headers});
  }
  public getFdcustomerByYear(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getfdcustomerbyyear?year="+a,{headers});
  }


  
  public postFdcustomer(fdcustomer: Fdcustomer){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postfdcustomer",fdcustomer,{headers,responseType:'text' as 'json'});
  }
  public updateFdcustomer(fdcustomer: Fdcustomer){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatefdcustomer",fdcustomer,{headers,responseType:'text' as 'json'});
  }
  public getFdcustomers(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallfdcustomers",{headers});
  }
  public getFdcustomerById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getfdcustomerbyid?fdcid="+a,{headers});
  }
  public deleteFdcustomer(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletefdcustomerbyid?fdcid="+a,{headers});
  }



  public postGlcustomer(glcustomer: Glcustomer){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postglcustomer",glcustomer,{headers,responseType:'text' as 'json'});
  }
  public updateGlcustomer(glcustomer: Glcustomer){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateglcustomer",glcustomer,{headers,responseType:'text' as 'json'});
  }
  public getGlcustomers(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallglcustomers",{headers});
  }
  public getGlcustomerById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getglcustomerbyid?glcid="+a,{headers});
  }
  public deleteGlcustomer(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteglcustomerbyid?glcid="+a,{headers});
  }
}
