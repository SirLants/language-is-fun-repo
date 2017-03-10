import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';
import { FormsModule }               from '@angular/forms';
import { HttpModule }                from '@angular/http';
import { MaterialModule }            from '@angular/material';
import { FlexLayoutModule }          from '@angular/flex-layout';

import { AppRoutingModule }          from './app-routing.module';

import { AppComponent }              from './app.component';
import { MyHomeComponent }           from './home/my-home.component';
import { UserProfileComponent }      from './user-profile/user-profile.component';
import { MangaBrowserComponent }     from './manga-browser/manga-browser.component';

import 'hammerjs';
import { ToolbarComponent }          from './toolbar/toolbar.component';
import { HomeBodyComponent } from './home-body/home-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    ToolbarComponent,
    UserProfileComponent,
    MangaBrowserComponent,
    HomeBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }