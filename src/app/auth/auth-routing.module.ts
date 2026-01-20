import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { FirstTimerComponent } from './first-timer/first-timer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
    { 
        path: '', component:   AuthComponent, children: [ 
          {
              'path': '', component: LoginComponent
          },
          {
              'path': 'forgot', component: ForgotComponent
          },
          {
              'path': 'reset', component: ResetComponent
          },
          {
              'path': 'first-timer', component: FirstTimerComponent
          },
          {
              'path': 'register', component: RegisterComponent
          }
        ] 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
export const AuthRoutingComponent = [ ];
