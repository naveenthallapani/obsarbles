import { Component,OnInit } from '@angular/core';
import { SibblingService } from './sibbling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private sibbling:SibblingService){}
  
  data="transfer data @input from parent to child method";
  pass:string;
  message1:string;
  target($event){
    this.pass=$event;
  }
  ngOnInit(){
    this.sibbling.currentMessage.subscribe(message1=>this.message1=message1)
    }
    newmessage()
    {
      this.sibbling.changeMessage("hi naveen this obsarble nfcfgffg");
    }

}
