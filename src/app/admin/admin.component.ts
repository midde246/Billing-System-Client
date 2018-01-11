import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'midde-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  { 
 constructor(private apiService:ApiService){}
  ngOnInit(){
    
  }

 addItemGst = new FormGroup({
    nameOfItem: new FormControl(),
    gst: new FormControl()
  })
 

  Data2AddItemGst(){
     this.apiService.sendData('http://127.0.0.1:8080/api/addItemGst', this.addItemGst.value).subscribe(
         response => console.log("Data Inserted successfully")
     )
  }
 }
