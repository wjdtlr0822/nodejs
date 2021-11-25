import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateService } from 'src/app/services/validate.service';
import { UserNoPW } from 'src/app/models/User';


@Component({
  selector: 'app-boardwrite',
  templateUrl: './boardwrite.component.html',
  styleUrls: ['./boardwrite.component.scss']
})
export class BoardwriteComponent implements OnInit {
  name:string;
  title:string;
  content:string;
  userNoPW: UserNoPW;
  userString:any;

  constructor(
    private flashMessage:FlashMessagesService,
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userString = localStorage.getItem('UserNoPW');
    this.userNoPW = JSON.parse(this.userString);
    this.name = this.userNoPW.name;
    console.log(this.userString);
  }


  onBoardSubmit(): any{
    this.name = this.userNoPW.name;
    const board={
      name:this.name,
      title:this.title,
      content:this.content
    };

    if(!this.validateService.validateBoard(board)){
      
      this.flashMessage.show("모든 필드를 입력하세요.",{
        
        cssClass:'alert-danger',
        timeout:3000
      })
      return false;
    }

    this.authService.registerBoard(board).subscribe((data)=>{
      if(data.success)
      {
        this.flashMessage.show(data.msg,{
          cssClass:'alert-success',
          timeout:3000
        });
        this.router.navigate(['/board']);
      }
      else
      {
        this.flashMessage.show(data.msg,{ //data.msg 는  routes/users.js 에서 보내는 msg
          cssClass:'alert-danger',
          timeout:3000
        });
        this.router.navigate(['/boardwrite']);
      }
    }
    )
  }
}
