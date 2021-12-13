import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Login } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserNoPW } from 'src/app/models/User';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.scss'],
})
export class ChangepwComponent implements OnInit {
  userString: any;
  userNoPW: UserNoPW;
  name: string;
  email: string;
  username: string;
  password: string;
  password1: string;
  token: any;
  point: any;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ChangePWSubmit() {
    const login: Login = {
      name: this.userNoPW.name,
      password: this.password,
    };
    const login1: Login = {
      name: this.userNoPW.name,
      password: this.password1,
    };
    this.authService.authenticateUser(login).subscribe((data) => {
      if (data.success) {
        this.authService.ChangePW(login1).subscribe((data) => {
          console.log(data);
          this.flashMessage.show('비밀번호 변경 성공', {
            cssClass: 'alert-success',
            timeout: 3000,
          });
        });
        console.log('last');
        this.router.navigate(['/login']);
        this.authService.logout();
      } else {
        this.flashMessage.show('비밀번호가 맞지 않습니다', {
          cssClass: 'alert-danger',
          timeout: 3000,
        });
      }
    });
  }

  ngOnInit(): void {
    this.userString = localStorage.getItem('UserNoPW');
    console.log(this.userString);
    this.userNoPW = JSON.parse(this.userString);
    this.name = this.userNoPW.name;
    this.email = this.userNoPW.email;
    this.username = this.userNoPW.username;
    // this.point=this.userNoPW.point; //db에서 값 가져오는걸로 변경하기
    const user = {
      name: this.name,
    };
    this.authService.getPoint(user).subscribe((data) => {
      this.point = data.point;
    });
  }
}
