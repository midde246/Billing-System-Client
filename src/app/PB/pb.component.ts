import { Component } from '@angular/core';

@Component({
  selector: 'midde-pb',
  templateUrl: './pb.component.html',
  styleUrls: ['./pb.component.css']
})
export class PbComponent  { 
   //private result: number = 0
   private first: number
   private second: number
   result = this.first + this.second

 /*   addMethod(value: number){
      this.result = this.result + value
   }
   addMethod2(value: number){
      this.result = this.result + value    
   } */
 }
