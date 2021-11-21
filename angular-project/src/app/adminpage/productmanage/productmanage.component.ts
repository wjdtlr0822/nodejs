import { Component, OnInit } from '@angular/core';
import { ReaddataService } from 'src/app/services/readdata.service';

@Component({
  selector: 'app-productmanage',
  templateUrl: './productmanage.component.html',
  styleUrls: ['./productmanage.component.scss']
})
export class ProductmanageComponent implements OnInit {
  productlist: any;


  constructor(private readdata:ReaddataService) { }

  ngOnInit(): void {
    this.readdata.findallProduct().subscribe((data)=>{
      this.productlist=data;
    })
  }

}
