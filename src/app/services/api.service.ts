import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class ApiService{
    token:string = null
    constructor(private http:Http){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'))
        this.token = currentUser.token
    }

    signIn(url:any, data:any){
        return this.http.post(url, data).map(
                (response:Response) => {
                   let token = response.json().token
                   if(token){
                       this.token = token
                       localStorage.setItem('currentUser',JSON.stringify({user: data.username, token:token}))
                       return true
                   }else{
                       return false
                   }
                }
              )
    }

    signout(){
        //Clear the authentication data....
        this.token = null
        localStorage.removeItem('currentUser')
    }

}