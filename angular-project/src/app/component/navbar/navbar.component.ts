import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserNoPW } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  UserNoPW : any;
  name : any;
  userString:any;
  admin="admin"

  constructor(
    private authService: AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.userString=localStorage.getItem("UserNoPW");
    this.UserNoPW = JSON.parse(this.userString);
    this.name=this.UserNoPW.name;
  }

  onLogoutClick():void{
    this.authService.logout();
    this.flashMessage.show('로그아웃 되었습니다.', {
    cssClass: 'alert-success',
    timeout: 3000,
    });
    this.router.navigate(['/login']);
  }

  checkLoggedIn():boolean{
    return this.authService.loggedIn();

  }

}
