import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
   selector: 'midde-signin',
   templateUrl: './signin.component.html',
   styleUrls: ['./signin.component.css']
})

export class SigninComponent{
    constructor(private apiService: ApiService,private router:Router){

    }
     
    ngOnInit(){
        this.apiService.signout()
    }
   
    private error:any
    userSigninForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })

    Data2Login(){
         this.apiService.signIn('http://127.0.0.1:8080/api/testLogin', this.userSigninForm.value).subscribe(
             result => {
                 if(result == true){
                    this.router.navigate(['/dashboard'])
                 }
                 else{
                     this.error = 'Wrong Username or Password'
                 }
             }
         )
    } 
     
} 