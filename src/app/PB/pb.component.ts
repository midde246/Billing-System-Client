import { Component } from '@angular/core';

@Component({
  selector: 'midde-pb',
  templateUrl: './pb.component.html',
  styleUrls: ['./pb.component.css']
})
export class PbComponent  { 
    titile = "Personal Monthly Budget"
    /*  myIncomeAttr =  */
    createField(){
      alert("Your field has been created");

      return false;
  }
 }
