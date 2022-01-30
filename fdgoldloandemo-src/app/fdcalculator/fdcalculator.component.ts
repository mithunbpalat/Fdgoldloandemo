import { Component, OnInit } from '@angular/core';
import { Fd } from '../gfd';

@Component({
  selector: 'app-fdcalculator',
  templateUrl: './fdcalculator.component.html',
  styleUrls: ['./fdcalculator.component.css']
})
export class FdcalculatorComponent implements OnInit {

  fd :any= new Fd(0,0,0,0,0);
  constructor() { }

  ngOnInit(): void {
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
    this.fd.interest=b;
    this.fd.amount= (b+a); 
  }
  public reset(){
    this.fd = new Fd(0,0,0,0,0);
  }
}
