import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SibblingService {
  private messageSource=new BehaviorSubject('default message');

currentMessage=this.messageSource.asObservable();
  constructor() { }
  changeMessage(message1:string)
  {
    this.messageSource.next(message1)
  }

}
