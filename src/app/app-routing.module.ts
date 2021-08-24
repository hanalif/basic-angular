import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhosWatchingComponent } from './components/whos-watching/whos-watching.component';

const routes: Routes = [
  {
    path: 'whos-watching',
    component: WhosWatchingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
