import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Login } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name:string;
  password:string;

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    const login:Login={
      name:this.name,
      password:this.password
    };

    this.authService.authenticateUser(login).subscribe((data)=>{
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        this.flashMessage.show("로그인 성공",{
          cssClass:'alert-success',
          timeout:3000
        })        
        this.router.navigate([''])
      }
      else{
        this.flashMessage.show("로그인 실패",{
          cssClass:'alert-danger',
          timeout:3000
        })
        this.router.navigate(['login'])
      }
    })
  }
}
