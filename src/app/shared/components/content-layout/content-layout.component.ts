import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
})
export class ContentLayoutComponent implements OnInit{

  /** Sidenav open/close */ 
  opened: boolean = true;

  /** Sidenav mode over/side */ 
  sideNavType: boolean = true;

  /** Device width*/ 
  

  constructor(){}

  ngOnInit(): void {
    this.layoutResponsive();
  }

  /** Device Properties for*/ 
  layoutResponsive(){
    let width = window.innerWidth;
    if (width <= 420) {
      this.opened = false;
      this.sideNavType = false;
    }
  }
  
  /** open/close sidenav*/ 
  toggle(){
    this.opened = !this.opened
  }
}
