import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import * as forge from 'node-forge';

const pki = forge.pki;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  username: string;
  value: any;

  constructor(
    private authService: AuthService,

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
          console.log(data.success)
        }
        else
        {
          console.log("err")
        }
      })
    
      }
      }
      