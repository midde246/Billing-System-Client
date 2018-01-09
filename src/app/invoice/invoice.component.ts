import { Component } from '@angular/core';

@Component({
  selector: 'midde-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent  { 

    items =[{description:"",qty:0, cost:0}]
    private totalTax:number
    private printStatusShow:boolean = false
    createRow(){
        this.items.push({ description:"",qty:0, cost:0})
        console.log("Item added");
        console.log(this.items);
    }

    removeRow(removeIndex:any){
        //console.log(this.items[removeIndex]) 
        this.items.splice(removeIndex, 1)
    }

    subTotal(){
        let total =0.0
        for(let i=0; i<this.items.length;i++){
           total = total + (this.items[i].qty * this.items[i].cost)
        }
        return total;
    }

    grandTotal(){
        let subTotal = this.subTotal()
        let grandTotal = subTotal + (subTotal * this.totalTax)/100;
        return grandTotal;
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
