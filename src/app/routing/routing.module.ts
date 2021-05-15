import { NgModule } from '@angular/core';
import { Routes,RouterModule} from'@angular/router';
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
