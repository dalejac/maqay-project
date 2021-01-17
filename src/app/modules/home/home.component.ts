import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewMode = 'topic';
  
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

btnClick= function () {
  console.log(this)
  this.router.navigateByUrl('/topics');
};
}
