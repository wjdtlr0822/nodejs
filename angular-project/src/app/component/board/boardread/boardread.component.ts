import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateService } from 'src/app/services/validate.service';
import { UserNoPW } from 'src/app/models/User';


@Component({
  selector: 'app-boardread',
  templateUrl: './boardread.component.html',
  styleUrls: ['./boardread.component.scss']
})
export class BoardreadComponent implements OnInit {

  Board:any;
  userString:any;
  userNoPW:UserNoPW;
  board:any;
  name:string;
  title:string;
  content:string;

  constructor(
    private flashMessage:FlashMessagesService,
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.userString = localStorage.getItem('UserNoPW');
    this.userNoPW = JSON.parse(this.userString);
    
    if(history.state.board != null){
      this.board = history.state.board;
      this.name = this.board.name;
      this.title = this.board.title;
      this.content = this.board.content;
    }
    else{
    }
  }

  onBoardUpdate(Board): any {

    const board={
      name:this.name,
      title:this.title,
      content:this.content
    };

    this.authService.UpdateBoard(board).subscribe((data)=>{
    })
    this.router.navigate(['/board']);
  }

  onBoardDelete(): any{
    const board={
      name:this.name,
      title:this.title,
      content:this.content
    };


    this.authService.DeleteBoard(board).subscribe((data)=>{
    })
    this.router.navigate(['/board']);

  }
}
