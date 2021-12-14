import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name:any;
  password:any;
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const login={
      name:this.name,
      password:this.password
    };

    this.authService.authenticateUser(login).subscribe((data)=>{
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        this.router.navigate(['profile'])
      }
      else{
        
        this.router.navigate(['login'])
      }
    })
  }
}
