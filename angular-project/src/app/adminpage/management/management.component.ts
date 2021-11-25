import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DeleteService } from 'src/app/services/delete.service';
import { ReaddataService } from 'src/app/services/readdata.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  userlist: any;

  constructor(private readdata: ReaddataService,
    private deleteservice:DeleteService,
    private flashMessage:FlashMessagesService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.readdata.findallUser().subscribe((data) => {
      this.userlist = data;
    });
  }

  delete(user){
    this.deleteservice.deleteuser(user).subscribe((data)=>{
      this.flashMessage.show(data.msg,{
        cssClass:'alert-success',
        timeout:3000
      })
    })
    this.router.navigate(['admin'])
  }
}
