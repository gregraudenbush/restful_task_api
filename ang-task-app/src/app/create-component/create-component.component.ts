import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  newtask : any

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newtask = { title: "", description: "", completed: "" }
  }
  //subscribes to our POST observable
  //we bout this.newtask to our input forms, the submitted this.newtask as an argument to our observable.
  //when button is clicked it sends the data through observable
  onSubmit() {
    let observable = this._httpService.addTask(this.newtask)
    observable.subscribe(data => {
      console.log("Got data from POST back", data);
      this.newtask = { title: "", description: "", completed: "" }

    })
  }
}
