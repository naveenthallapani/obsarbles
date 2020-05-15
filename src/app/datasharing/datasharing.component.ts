import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SibblingService } from '../sibbling.service';



@Component({
  selector: 'app-datasharing',
  templateUrl: './datasharing.component.html',
  styleUrls: ['./datasharing.component.css']
})
export class DatasharingComponent implements OnInit {
  constructor(private sibbling:SibblingService){}

  pass:string="send data child to parent @output using evntemitter";
  message1:string;

  
  @Output() messageEvent1=new EventEmitter<string>();
  @Input() message 
 
  send()
  {
    this.messageEvent1.emit(this.pass)
  }
  
  ngOnInit(){
    this.sibbling.currentMessage.subscribe(message1=>this.message1=message1)
    }

  
}
