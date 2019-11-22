import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../reducers'
import { LoginActions } from './store/actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  login(){
    this.store.dispatch(LoginActions.loginRequest({
      login: {
        user: 'Gamer',
        email: 'gamer@gamer.com'
      }
    }))
  }

}
