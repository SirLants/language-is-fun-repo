import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { MaterialModule }               from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { ChartsModule }                 from 'ng2-charts';

import { AppRoutingModule }             from './app-routing.module';

import { AppComponent }                 from './app.component';
import { HomeComponent }                from './home/home.component';
import { UserProfileComponent }         from './user-profile/user-profile.component';
import { HomeMangaBrowserComponent }    from './home-manga-browser/home-manga-browser.component';
import { HomeToolbarComponent }         from './home-toolbar/home-toolbar.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { HomeBodyComponent }            from './home-body/home-body.component';
import { UserProfileStatsComponent }    from './user-profile-stats/user-profile-stats.component';
import { UserProfileSocialComponent }   from './user-profile-social/user-profile-social.component';
import { QuizComponent }                from './quiz/quiz.component';
import { QuizToolbarComponent }         from './quiz-toolbar/quiz-toolbar.component';
import { QuizBodyComponent }            from './quiz-body/quiz-body.component';
import { LearningComponent }            from './learning/learning.component';
import { LearningToolbarComponent }     from './learning-toolbar/learning-toolbar.component';
import { LearningBodyComponent }        from './learning-body/learning-body.component';

import 'hammerjs';
import { QuizBody2Component } from './quiz-body-2/quiz-body-2.component';
import { QuizBody3Component } from './quiz-body-3/quiz-body-3.component';
import { QuizBody4Component } from './quiz-body-4/quiz-body-4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMangaBrowserComponent,
    HomeBodyComponent,
    HomeToolbarComponent,
    UserProfileComponent,
    UserProfileSettingsComponent,
    UserProfileStatsComponent,
    UserProfileSocialComponent,
    QuizComponent,
    QuizToolbarComponent,
    QuizBodyComponent,
    LearningComponent,
    LearningToolbarComponent,
    LearningBodyComponent,
    QuizBody2Component,
    QuizBody3Component,
    QuizBody4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }