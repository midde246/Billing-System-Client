import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'midde-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent  { 
  private myMessages = {}
  private msgStatus:boolean = false;
  constructor(private apiService:ApiService){}
  getMessage(){
    this.apiService.getData('http://127.0.0.1:8080/api/message').subscribe(
      response => {
          this.myMessage = response;
          console.log(this.myMessage);
          this.msgStatus = true;
      }  
    )
  }

 }
