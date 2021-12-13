import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name:any;
  email:any;
  username:any;
  password:any;
  password1:any;
  constructor() { }

  ngOnInit() {
  }

  // onRegisterSubmit():any{
  //   if(this.password!==this.password1)
  //   {
      
  //   }
    
  //   // if(){}

  //   const user={
  //     name:this.name,
  //     email:this.email,
  //     username:this.username,
  //     password:this.password
  //   }

  // }
}
