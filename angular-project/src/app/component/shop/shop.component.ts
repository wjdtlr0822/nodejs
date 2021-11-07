import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  numbers=Array.from(Array(4).keys());
  constructor() { }

  ngOnInit(): void {
  }


}
