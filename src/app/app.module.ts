import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { MaterialModule }               from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';

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
import { QuizScreen1Component } from './quiz-screen-1/quiz-screen-1.component';
import { QuizScreen2Component } from './quiz-screen-2/quiz-screen-2.component';
import { QuizScreen3Component } from './quiz-screen-3/quiz-screen-3.component';
import { QuizScreen4Component } from './quiz-screen-4/quiz-screen-4.component';
import { LearningScreen1Component } from './learning-screen-1/learning-screen-1.component';
import { LearningScreen2Component } from './learning-screen-2/learning-screen-2.component';
import { LearningScreen3Component } from './learning-screen-3/learning-screen-3.component';

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
    QuizScreen1Component,
    QuizScreen2Component,
    QuizScreen3Component,
    QuizScreen4Component,
    LearningScreen1Component,
    LearningScreen2Component,
    LearningScreen3Component
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