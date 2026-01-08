import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { InputFieldComponent } from '../components/controls/input-field/input-field.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [  
    // InputFieldComponent,
    RegisterComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
    // InputFieldComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
