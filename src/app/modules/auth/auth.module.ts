import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '@sharedshared.module';//alias de donde importa el modulo


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule//modulo que solicitamos importar
  ]
})
export class AuthModule { }
