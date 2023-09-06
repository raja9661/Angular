import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  Iname:any='';
  Iage:any='';
  people:any=[];
  inputEvent1(ev:any)
  {
    this.Iname=ev.target.value;
  }
  inputEvent2(ev:any)
  {
    this.Iage=ev.target.value
  }
  addItem()
  {
    this.people.push(this.Iname+"-"+this.Iage);
  }
}
