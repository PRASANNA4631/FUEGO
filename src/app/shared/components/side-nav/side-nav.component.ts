import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../services/side-nav.service';
import { SideNavListModel } from '../../models/side-nav-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent implements OnInit {
  /** Local variables */
  listitem!: SideNavListModel[];

  constructor(private _service: SideNavService, private _router: Router) {}

  ngOnInit(): void {
    this.getSideNavList();
  }

  /** Get sise-nav list*/
  getSideNavList() {
    this._service.getSideNavItems().subscribe({
      next: (data) => {
        this.listitem = data.items;
      },
    });
  }

  /** Side-nav-items navigation handle*/
  navigateToSideMenuScreen(navItem: SideNavListModel) {
    this._router.navigate([navItem.CategoryUrl]);
  }
}
