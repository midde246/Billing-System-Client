import { Component } from '@angular/core';

@Component({
  selector: 'midde-pb',
  templateUrl: './pb.component.html',
  styleUrls: ['./pb.component.css']
})
export class PbComponent  { 
    titile = "Personal Monthly Budget"
    private pTotalIncome:number
    private totalIncome:number;
    private aTotalIncome:number;
    
    saveData(pTotalIncome:any,aTotalIncome:any){
      this.pTotalIncome = pTotalIncome;
      this.aTotalIncome = aTotalIncome;
      console.log(this.aTotalIncome)
     return false;
    }
   
   
    /* private createStatus : boolean = false
    private rowNo = [1,2,3,5,5]
    private myIncomeAttr =  "Basic Income" 
    createField(){
       this.createStatus = true

      return false;
     }*/

 }
