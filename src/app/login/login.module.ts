import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginRoutesModule } from './login.routes'



@NgModule({
  imports: [
    CommonModule,
    LoginRoutesModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
