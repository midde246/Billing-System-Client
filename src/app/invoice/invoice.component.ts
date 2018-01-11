import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'midde-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent  { 

    items =[{item:"",qty:0, cost:0, gst:0}]
    private totalTax:number
    private printStatusShow:boolean = false
    private resultItems:any
    private gst =0

    constructor(private apiService:ApiService){}

    ngOnInit(){
      this.apiService.getData('http://localhost:8080/api/getItemGst').subscribe(
          response => this.resultItems = response             
      )
    }
    
   
    createRow(){
        this.items.push({item:"",qty:0, cost:0, gst:0})
        console.log(this.items);
    }

    removeRow(removeIndex:any){
        //console.log(this.items[removeIndex]) 
        this.items.splice(removeIndex, 1)
    }

    onItemSelect(item:any, index:any){
        for(let i=0; i<this.resultItems.length; i++){
            if(this.resultItems[i].nameOfItem == item){
               // this.gst = this.resultItems[i].gst;
               this.items[index].gst = this.resultItems[i].gst; 
            }
        }
    }
 
    total(){
        let total =0.0
        for(let i=0; i<this.items.length;i++){
           total = total + ((this.items[i].qty * this.items[i].cost) + (this.items[i].qty * this.items[i].cost * this.items[i].gst)/100);
        }
   
        return total;
    }
 

    printStatusOff():void{
       this.printStatusShow = false;
    }

    printStatusOn():void{
        this.printStatusShow = true;
     }

     printDoc(){
        window.print();
     }
 }
