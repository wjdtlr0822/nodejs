import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
})
export class BoardPage implements OnInit {

  ddd:string;
  boards:any;
  board:any;
  title:any;
  content:String;
  
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

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
