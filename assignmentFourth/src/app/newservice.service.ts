import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor() { }
  SI(principal:number,rate:number,time:number)
  {
    return (principal*rate*(time)/12)/100;
  }
}
