import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NavbarComponent } from '../navbar/navbar.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'

import { GoalsComponent } from '../goals/goals.component';
import { FunnyComponent } from '../funny/funny.component';
import { PlaysComponent } from '../plays/plays.component';

import { postFormComponent } from '../postForm/postForm.component';
const routes: Routes = [
  { path: 'navbar-Component', component: NavbarComponent },
  //{ path: 'navbar-Component', component: NavbarComponent }, //login
  //{ path: 'navbar-Component', component: NavbarComponent }, //publish
  //{ path: 'navbar-Component', component: NavbarComponent }, //share

  { path: 'postForm', component: postFormComponent }, //postForm
  { path: 'goals', component: GoalsComponent }, //goals
  { path: 'funny', component: FunnyComponent }, //funny
  { path: 'plays', component: PlaysComponent }, //plays
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
