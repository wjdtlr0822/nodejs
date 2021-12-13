import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { BuyService } from 'src/app/services/buy.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss'],
})
export class ShopProductComponent implements OnInit {
  product: any;
  num: number = 1;
  bool: any;
  name: string;
  username: string;
  email: string;
  point: number;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private buyService: BuyService
  ) {}

  ngOnInit(): void {
    this.product = history.state.product;

    this.authService.getProfile().subscribe(
      (profile) => {
        console.log('hello' + profile);
        this.name = profile.user.name;
        this.username = profile.user.username;
        this.email = profile.user.email;
        this.point = profile.user.point;
      },
      (err) => {
        console.log(err);
        return false;
      }
    ); //서버가 주는 데이터를 profile로 읽음
  }

  buy() {
    if (this.num * this.product.price > this.point) {
      this.flashMessage.show('포인트가 부족합니다.', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
      this.router.navigate(['#']);
    } else {
      //point 빼는거 처리하기.
      this.buyService
        .buyproduct(this.num * this.product.price, this.point, this.name)
        .subscribe((data) => {});
      this.flashMessage.show('구매 완료.', {
        cssClass: 'alert-success',
        timeout: 3000,
      });
      this.buyService
        .addProductList(this.product, this.name, this.num)
        .subscribe((data) => {});
      this.router.navigate(['/shop']);
    }
  }
}
