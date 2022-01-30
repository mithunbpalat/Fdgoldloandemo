import { Component, OnInit } from '@angular/core';
import { Ornament } from '../gornament';

@Component({
  selector: 'app-glcalculator',
  templateUrl: './glcalculator.component.html',
  styleUrls: ['./glcalculator.component.css']
})
export class GlcalculatorComponent implements OnInit {

  ornament : any = new Ornament("",0,"",0,0);
  constructor() { }

  ngOnInit(): void {
  }

  public calculator(a:number, b:string){
    if(b == "24"){
      this.ornament.value=(a* 4869);
      this.ornament.loan= (a* 3651.75);
    }
    if(b == "22"){
      this.ornament.value=(a* 4769);
      this.ornament.loan= (a* 3576.75);
    }
    if(b == "20"){
      this.ornament.value=(a* 4155);
      this.ornament.loan= (a* 3116.25);
    }
    if(b == "18"){
      this.ornament.value=(a* 3739);
      this.ornament.loan= (a* 2804.25);
    }
  }
  public reset(){
    this.ornament= new Ornament("",0,"",0,0);
  }

}
