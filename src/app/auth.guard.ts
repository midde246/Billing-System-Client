import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
@Injectable()

export class AuthGaurd implements CanActivate{
    constructor(private router:Router){}
    canActivate(){
        if(localStorage.getItem('currentUser')){
            //If user already logged in return true..
            return true;
        }else{
            //If user not logged in nevigate to login page abd return false.....
            this.router.navigate(['/signin']);
            return false
        }
    }
}