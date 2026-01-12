import { NgModule } from '@angular/core';

import { AuthRoutingComponent, AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { FirstTimerComponent } from './first-timer/first-timer.component';


@NgModule({
  declarations: [  
    AuthRoutingComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    ResetComponent,
    FirstTimerComponent,
    AuthComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
