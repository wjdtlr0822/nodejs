import { Component, OnInit } from '@angular/core';
import { ReaddataService } from 'src/app/services/readdata.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  userlist: any;

  constructor(private readdata: ReaddataService) {}

  ngOnInit(): void {
    this.readdata.findallUser().subscribe((data) => {
      this.userlist = data;
    });
  }

  delete(user){
    //user정보 기반으로 삭제하기.
  }
}
