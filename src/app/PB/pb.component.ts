import { Component } from '@angular/core';

@Component({
  selector: 'midde-pb',
  templateUrl: './pb.component.html',
  styleUrls: ['./pb.component.css']
})
export class PbComponent  { 
    titile = "Personal Monthly Budget"

    // All Instancees.....
    //private createStatus : boolean = false
    private pTotalIncome:number
    private totalIncome:number;
    private aTotalIncome:number;

    //Testing purpose....
    rows:any = []
    rowName =''

    saveData(pTotalIncome:any,aTotalIncome:any){
      this.pTotalIncome = pTotalIncome;
      this.aTotalIncome = aTotalIncome;
      console.log(this.aTotalIncome)
     return false;
    }
   

    createField(myRowName:any){
         console.log(myRowName)
         this.rowName = myRowName
         this.rows.push(this.rowName)  

       return false;
     }
 }
