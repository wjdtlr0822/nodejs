import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { PointService } from 'src/app/services/point.service';
import * as temp from '../../../assets/js/tensor.js'

@Component({
  selector: 'app-separate-collection',
  templateUrl: './separate-collection.component.html',
  styleUrls: ['./separate-collection.component.scss']
})
export class SeparateCollectionComponent implements OnInit {
  test:any="noPlay";
  point1:any;
  name:string;
  username:string;
  email:string;
  point:number;
  constructor(
    private flashMessege:FlashMessagesService,
    private router:Router,
    private pointService:PointService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe((profile)=>{
      this.name=profile.user.name;
      this.username=profile.user.username;
      this.email=profile.user.email;
      this.point=profile.user.point;
    },(err)=>{
      console.log(err);
      return false;
    }); //서버가 주는 데이터를 profile로 읽음
  }

  test1(){
    this.test="play";
    temp.test1();
  }

  testtest(){
    this.test=temp.exited();

    if(this.test=="pet"){this.point1=10}
    else if(this.test=="can"){this.point1=15}
    else if(this.test=="glass"){this.point1=20}
    else{this.point1=0}

    const user={
      name:this.name,
      point:this.point+this.point1
    }


    if(this.test=="no"){
    this.flashMessege.show("쓰레기를 올리고 눌러주세요",{
      cssClass:'alert-danger',
      timeout:3000
    })
  }

  else{
    this.pointService.point_accumulate(user).subscribe((data)=>{
      
    });
    this.flashMessege.show(this.test+"을(를) 버리셨습니다."+user.name+"님 point"+this.point1+"원 적립",{
      cssClass:'alert-success',
      timeout:3000
    });
    this.router.navigate(['/profile']);

  }
  
}
}
