import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessage } from 'angular2-flash-messages/module/flash-message';
import { ReaddataService } from 'src/app/services/readdata.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  productlist:any;


  constructor(private readdata:ReaddataService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit(): void {
    this.readdata.findallProduct().subscribe((data)=>{
      this.productlist=data;
  })
}

  moveshopproduct(product): void{
    this.router.navigateByUrl('/shopproduct',{state:{product}});
  }

}
