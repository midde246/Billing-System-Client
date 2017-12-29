import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class ApiService{
    constructor(private http:Http){}

    sendData(url:any, data:any){
        return this.http.post(url, data).map(
                    (response:Response) => response.json()
              )
    }

}