import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  constructor(private authServices: AuthService) {}
 img: any;
  ngOnInit(): void {
    this.authServices.getimg().subscribe(data=>{
      this.img=data;
    });

  
}
}
