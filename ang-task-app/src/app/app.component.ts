import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'app';
  mytasks = [];
  clicked = false;
  buttontest = "ZOMG BUTTON.....MUST.....PRESS....."
  

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    
    this.getTasksfromService();

  }
  

  getTasksfromService(){
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log("Got our tasks!", data);
      for(var i = 0; i < data['tasks'].length; i++){
        if(data['tasks'][i]['title'] && data['tasks'][i]['title'] != "butt party" ){
          this.mytasks.push(data['tasks'][i])

        }
      }
      console.log("remade tasks", this.mytasks)
    })
  }


  onButtonClick(): void {
    if(!this.clicked){
      this.clicked = true; 
    }else{
      this.clicked = false;
    }
    console.log(`Click event is working`);
  }
}
