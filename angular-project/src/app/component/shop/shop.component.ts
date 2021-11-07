import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  namelist=['a','b','c','d'] //나중에 이미지값 및 이미지 저장경로를 불러오기.
  constructor() { }

  ngOnInit(): void {
  }


}
