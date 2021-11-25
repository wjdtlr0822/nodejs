import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DeleteService } from 'src/app/services/delete.service';
import { ReaddataService } from 'src/app/services/readdata.service';

@Component({
  selector: 'app-productmanage',
  templateUrl: './productmanage.component.html',
  styleUrls: ['./productmanage.component.scss']
})
export class ProductmanageComponent implements OnInit {
  productlist: any;


  constructor(private readdata:ReaddataService,
    private deleteservice:DeleteService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit(): void {
    this.readdata.findallProduct().subscribe((data)=>{
      this.productlist=data;
    })
  }

  delete(product){
    this.deleteservice.deleteproduct(product).subscribe((data)=>{
      this.flashMessage.show(data.msg,{
        cssClass:'alert-success',
        timeout:3000
      })
    })
    this.router.navigate(['admin'])
  }
}
