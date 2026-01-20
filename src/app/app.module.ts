import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { AuthTokenInterceptor } from './interceptor/AuthToken.interceptor';
import { AppReducer } from './state/app.state';
import { AuthEffect } from './state/effects/auth.effects';
import { ProductEffect } from './state/effects/product.effects';
import { UserEffect } from './state/effects/user.effects';
import { CustomSerializer } from './state/router/custom.serializer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    ModulesModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
       maxAge: false,
       logOnly: !isDevMode()
    }),
    EffectsModule.forRoot([AuthEffect, UserEffect, ProductEffect]),    
    HttpClientModule,
    StoreRouterConnectingModule.forRoot({
       serializer: CustomSerializer
    })
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
