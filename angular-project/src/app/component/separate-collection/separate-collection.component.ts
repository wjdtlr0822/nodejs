import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as temp from '../../../assets/js/tensor.js'

@Component({
  selector: 'app-separate-collection',
  templateUrl: './separate-collection.component.html',
  styleUrls: ['./separate-collection.component.scss']
})
export class SeparateCollectionComponent implements OnInit {
  test:any;

  constructor(
    private flashMessege:FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  test1(){
    this.test=temp.test1();
    if(this.test=="pet"){
      this.flashMessege.show("ccc",{
        clssClass:"alert-success",
        timeout:3000
      })
    }
  }

  testtest(){
    this.flashMessege.show("test success",{
      cssClass:'alert-success',
      timeout:3000
    })
  }
  
}
