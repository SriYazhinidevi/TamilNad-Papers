import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:RegisterComponent},
  {path: '', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'product', component:ProductdisplayComponent},
  {path: 'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
