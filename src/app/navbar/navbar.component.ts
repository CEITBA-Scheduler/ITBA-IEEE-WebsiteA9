import { Component, OnInit, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.about-ieee',
    });
  }
  scrollTo(target: string){
    console.log(target);
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: target,
    });
  }

}