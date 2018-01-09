import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'midde-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  { 
 constructor(){}
  ngOnInit(){
    
  }

 addItemGst = new FormGroup({
    nameOfItem: new FormControl(),
    gst: new FormControl()
  })
 

  Data2AddItemGst(){
    alert("Item added")
    console.log(this.addItemGst.value);
  }
 }
