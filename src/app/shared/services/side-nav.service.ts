import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SideNavListModel } from '../models/side-nav-list.model';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor(private _http: HttpClient) { }

  getSideNavItems(): Observable<{
    items: SideNavListModel[]
  }>{
     return this._http.get('assets/json-data/side-nav-list.json').pipe(map((response: any) => {
      const items: SideNavListModel[] = response.map((i: any) => {
        return new SideNavListModel(i);
      })
      return {
        items
      };
     }))
  }
}
