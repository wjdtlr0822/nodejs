import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ValidateService } from '../service/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name:string;
  username:string;
  email:string;
  password1:string;
  password2:string;

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(): any{

    if (this.password1!==this.password2){
      return false;
    }

    if(!this.validateService.validateEmail(this.email)){
      return false;
    }

    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password1,
    };

    if(!this.validateService.validateRegister(user)){
      return false;
    }

    
    this.authService.registerUser(user).subscribe((data)=>{
      
      if(data.success)
      {
        this.router.navigate(['/login'])
      }
      else
      {
        this.router.navigate(['/register']);
      }
    })

  }
}