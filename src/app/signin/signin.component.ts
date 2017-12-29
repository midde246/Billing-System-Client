import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
   selector: 'midde-signin',
   templateUrl: './signin.component.html',
   styleUrls: ['./signin.component.css']
})

export class SigninComponent{
    constructor(private apiService: ApiService){

    }
    
    userSigninForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })
    Data2Login(){
         this.apiService.sendData('http://127.0.0.1:8080/api/testLogin', this.userSigninForm.value).subscribe(
             resData => console.log(resData)
         )
    }
   
    
     
} 