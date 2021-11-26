import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-separate-collection',
  templateUrl: './separate-collection.component.html',
  styleUrls: ['./separate-collection.component.scss']
})
export class SeparateCollectionComponent implements OnInit {
  modelURL="./my_model/model.json";
  metadataURL="./my_model/metadata.json"
  model:any;
  webcam:any;
  labelContainer:any;
  maxPredictions:any;

  constructor(
    private flashMessege:FlashMessagesService
  ) { }

  ngOnInit(): void {
  }


  
}
