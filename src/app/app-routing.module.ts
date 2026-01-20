import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  
   {
      path: '',
      loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
   }

];
 
@NgModule({
  imports: [
      AuthRoutingModule,
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponent = [ ];