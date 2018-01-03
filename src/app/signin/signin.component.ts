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
    constructor(private router:Router, private apiService: ApiService){}
    ngOnInit(){
        this.apiService.signOut()
    }
    error =''
    
    userSigninForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })
    Data2Login(){
         this.apiService.signIn('http://127.0.0.1:8080/api/signin', this.userSigninForm.value).subscribe(
             result => {
                 if(result == true){
                    this.router.navigate(['/dashboard']);
                 }
                 else{
                    this.error = 'Invalid Username or Password'

                 }
             }
         )
    }
   
    
     
} 