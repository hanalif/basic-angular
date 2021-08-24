import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhosWatchingComponent } from './components/whos-watching/whos-watching.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WhosWatchingComponent,
    UsersListComponent,
    UserPreviewComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
