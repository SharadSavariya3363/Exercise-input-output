import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  inputUsername:any;
  inputEmail:any;
  inputAddress:any;
  inputState:any;
  inputCity:any;
  inputArray:any = [];
  displayDataEntryFields:any;


  onClick(){    
    this.inputArray.push({'uname': this.inputUsername, 
    'email': this.inputEmail, 
    'address': this.inputAddress, 
    'state': this.inputState, 
    'city': this.inputCity})   //push data into an array
    this.inputUsername = "";
    this.inputEmail = "";
    this.inputAddress = "";
    this.inputState = "";
    this.inputCity = ""
  }

  receivedData(event){   //received data of radio button from child(data-display) component
    this.displayDataEntryFields = event;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
