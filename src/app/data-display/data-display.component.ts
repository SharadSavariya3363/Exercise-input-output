import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  @Input() displayArray:any;    //recived array from parant(data-entry) component
  @Output() displayDataEntryFields = new EventEmitter();
  value:string;

  checkValue(){   //send the value of radio input to the parent(data-entry) component
    this.displayDataEntryFields.emit(this.value);
  }

  // onClickDisplayDataEntry(){
  //   this.displayDataEntryFields.emit(this.value);
  // }

  // onClickNotDisplayDataEntry(){
  //   this.displayDataEntryFields.emit(!this.value);
    
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
