import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-alltrain',
  templateUrl: './view-alltrain.component.html',
  styleUrls: ['./view-alltrain.component.css']
})
export class ViewAlltrainComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewTrain().subscribe(

      (data)=>{
        this.trainData=data
      }
    )
  }
  
  trainData:any={}
  
  ngOnInit(): void {
  }

}
