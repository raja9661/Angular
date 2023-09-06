import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  newform:FormGroup;
  ngOnInit(){
    this.newform=new FormGroup({
      requidField:new FormGroup({
      firstname:new FormControl(null,Validators.required),
      lastname:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      }),
      gender:new FormControl(null),
      country:new FormControl("india"),
      hobby:new FormControl(null)
    });
  }
  onclick()
  {
    console.log(this.newform);
  }
      
}

