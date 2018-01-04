import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'midde-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  { 
  private myMessages = {}
  private sendMessageText = {}
  private msgStatus:boolean = false;
  constructor(private apiService:ApiService){}
  getMessage(){
    this.apiService.getData('http://127.0.0.1:8080/api/message').subscribe(
      response => {
          this.myMessages = response;
          console.log(this.myMessages);
          this.msgStatus = true;
      }  
    )
  }

  sendMessage(){
      this.apiService.sendData('http://127.0.0.1:8080/api/insertMessage',this.sendMessageText).subscribe(
        response => console.log(response.json())
      )
  }

 }
