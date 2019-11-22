import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getLogin } from './login/store/selectors/login.selector';
import { logoutRequest } from './login/store/actions/login.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NgRx Games';
  login: any = null;

  constructor(
    private store: Store<any>
  ){}

  ngOnInit(){
    this.store.select(getLogin).subscribe(login => {
      this.login = login.data;
    })
  }

  logout(){
    this.store.dispatch(logoutRequest({ login: null }))
  }
}
