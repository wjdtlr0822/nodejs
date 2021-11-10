import { Component, OnInit } from '@angular/core';
import { ReaddataService } from 'src/app/services/readdata.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  
  name:String;
  username:String;
  email:String;

  
  constructor(
    private readdata:ReaddataService,
  ) { }
  
  ngOnInit(): void {
    this.readdata.findall().subscribe((data)=>{
      this.name=data.data;
    })
  }
  
}
