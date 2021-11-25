import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Board } from 'src/app/models/Board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  static Readboard() {
    throw new Error('Method not implemented.');
  }

  ddd:string;
  boards:any;
  board:any;
  title:any;
  content:String;

  constructor(    
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.authService.getList().subscribe((boards) => {
      this.boards = boards;
    }
  );
}

Readboard(board): void{
  this.router.navigateByUrl('/boardread' ,{state:{board}});
}
}
