// import { Component, NgModule } from '@angular/core';
import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component'; */

/* const approut: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"",
    component:HomeComponent
  }
 
]; */
const routes:Routes=[]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
