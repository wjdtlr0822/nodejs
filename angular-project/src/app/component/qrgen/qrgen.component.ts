import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as forge from 'node-forge';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

const pki = forge.pki;

@Component({
selector: 'app-qrgen',
templateUrl: './qrgen.component.html',
styleUrls: ['./qrgen.component.scss'],
})
export class QrgenComponent implements OnInit {
username: string;
value: string;

constructor(
private authService: AuthService,
private flashMessage: FlashMessagesService,
private router: Router
) {}
ngOnInit(): void {
let userNoPW: any = localStorage.getItem('UserNoPW');
this.username = JSON.parse(userNoPW).username;
const username = this.username;
const currentTime = new Date().getTime();


  const token = localStorage.getItem('authToken');
  const request = {
  username: username,
  currentTime: currentTime,
  token: token,
  };
  const loginRequest = JSON.stringify(request);
  this.value = loginRequest;


  this.authService.registertoken(this.value).subscribe((data)=>{
    if(data.success)
    {
    }
    else
    {
      this.flashMessage.show(data.msg,{ //data.msg 는  routes/users.js 에서 보내는 msg
        cssClass:'alert-danger',
        timeout:3000
      });
    }
  })

  }
  }
  