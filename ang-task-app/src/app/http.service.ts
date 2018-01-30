import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  
  //includes the HttpClient to talk to my Node.js Server
  constructor(private _http: HttpClient) { 
    
  }
  //OUR OBSERVABLES FOR GET ALL AND POST NEW
  getTasks(){
    console.log("in http.service.ts")
    // our http response is an Observable, store it in a variable
    //let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks')
    
  }
  addTask(newtask){
    return this._http.post('/new', newtask)
}

}



