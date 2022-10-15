import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-alltrain',
  templateUrl: './view-alltrain.component.html',
  styleUrls: ['./view-alltrain.component.css']
})
export class ViewAlltrainComponent implements OnInit {

  constructor() { }

  name="devika"

  readValue=()=>{
   
   this.name="raju"
  }

  ngOnInit(): void {
  }

}
