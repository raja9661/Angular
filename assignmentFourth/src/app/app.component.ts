import { Component } from '@angular/core';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';
  input1:number=0;
  input2:number=0;
  input3:number=0;
  input4:number=0;
  amount:number=0;
  constructor(public service:NewserviceService)
  {}
  SIcalculator()
  {
    this.input4=this.service.SI(this.input1,this.input2,this.input3);
    this.amount=this.input1+this.input4;
  }
}
