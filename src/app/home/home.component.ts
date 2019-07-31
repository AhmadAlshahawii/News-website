import { NavService } from './../nav.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get newsContainer() {
    return this._navService.newsContainer;
  }
  get firstNews() {
    return this._navService.firstNews;
  }
  get topNews() {
    return this._navService.topNews;
  }
  constructor(private _navService : NavService) {  }

  


  ngOnInit() {
  }

}
