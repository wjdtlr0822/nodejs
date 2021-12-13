import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userString:any;
  userNoPW: any;
  name: string;
  email : string;
  username : string;
  point:any;
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.userString = localStorage.getItem('UserNoPW');
    console.log(this.userString);
    this.userNoPW = JSON.parse(this.userString);
    this.name = this.userNoPW.name;
    this.email = this.userNoPW.email;
    this.username = this.userNoPW.username;
    // this.point=this.userNoPW.point; //db에서 값 가져오는걸로 변경하기
    const user={
      name:this.name,
    }
    this.authService.getPoint(user).subscribe((data)=>{
      this.point=data.point;
    })
  }

}
