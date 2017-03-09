import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';
import { FormsModule }               from '@angular/forms';
import { HttpModule }                from '@angular/http';
import { MaterialModule }            from '@angular/material';
import { FlexLayoutModule }          from '@angular/flex-layout';

import { AppComponent }              from './app.component';
import { MyHomeComponent }           from './home/my-home.component';
import { SidebarComponent }          from './sidebar/sidebar.component';

import 'hammerjs';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModul
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }