import { Component, OnInit } from '@angular/core';
import { UserNoPW } from 'src/app/models/User';
import { BuyService } from 'src/app/services/buy.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  name: string;
  userString: any;
  userNoPW: UserNoPW;
  buylist: any;

  constructor(private buyService: BuyService) {}

  ngOnInit(): void {
    this.userString = localStorage.getItem('UserNoPW');
    this.userNoPW = JSON.parse(this.userString);
    this.name = this.userNoPW.name;

    this.buyService.findProudctList(this.name).subscribe((data) => {
      this.buylist = data;
    });
  }
}
