import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'cart',
        loadChildren: '../cart/cart.module#CartPageModule'
      },
      {
        path: 'checkout',
        loadChildren: '../checkout/checkout.module#CheckoutPageModule'
      },
      {
        path: 'productos',
        loadChildren: '../productos/productos.module#ProductosPageModule'
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule'
      },
      { 
        path: 'marraquetas',
        loadChildren: '../marraquetas/marraquetas.module#MarraquetasPageModule'
      },
      { 
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
