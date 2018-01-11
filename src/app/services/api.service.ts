import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
 

@Injectable()

export class ApiService{
    private token: String
    constructor(private http:Http){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    signIn(url:any, data:any){
        return this.http.post(url, data).map(
                    (response:Response) => {
                        
                       let token = response.json().token
                       if(token){
                           //Set the token property..
                           this.token = token;

                           // Store username and jwt token in local storage
                           localStorage.setItem('currentUser', JSON.stringify({username: data.username, token:token}))
                            // return true to indicate successful login
                           return true;
                       } else {
                            // return false to indicate failed login
                            return false;
                        }
         })
    }

    signOut(){
        this.token = null;
        localStorage.removeItem('currentUser')
    }
    
    getData(url:any){   
       //Setting header for proper Authentication ( Now commented for development )
       /* let headers =new Headers({'authorization': 'Bearer '+ this.token})
       let options = new RequestOptions({headers:headers})  */ 
 
       return this.http.get(url/* , options */).map(
            (response:Response) => response.json()
        )
    }
    sendData(url:any, data:any){
       console.log(data) 
        //Setting header for proper Authentication ( Now commented for development )
       /* let headers =new Headers({'authorization': 'Bearer '+ this.token})
       let options = new RequestOptions({headers:headers})  */ 

       return this.http.post(url, data/* , options */).map(
              (response: Response) => response.json()    
       )
    }
}