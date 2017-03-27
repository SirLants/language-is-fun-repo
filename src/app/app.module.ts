//System modules to be imported
import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { MaterialModule }               from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { ChartsModule }                 from 'ng2-charts';
import 'hammerjs';

//Put app-routing on its own line because ITS IMPORTANT, K
import { AppRoutingModule }             from './app-routing.module';

//These are all of our components
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
import { QuizBody2Component }           from './quiz-body-2/quiz-body-2.component';
import { QuizBody3Component }           from './quiz-body-3/quiz-body-3.component';
import { QuizBody4Component }           from './quiz-body-4/quiz-body-4.component';
import { LearningComponent }            from './learning/learning.component';
import { LearningToolbarComponent }     from './learning-toolbar/learning-toolbar.component';
import { LearningBodyComponent }        from './learning-body/learning-body.component';
import { LearningBody2Component }       from './learning-body-2/learning-body-2.component';
import { LearningBody3Component }       from './learning-body-3/learning-body-3.component';
import { QuizBody5Component }           from './quiz-body-5/quiz-body-5.component';
import { QuizBody6Component }           from './quiz-body-6/quiz-body-6.component';
import { AppendixComponent }            from './appendix/appendix.component';
import { HomeAppendixComponent } from './home-appendix/home-appendix.component';

//All of these are dialogs because I have no clue how to make separate dialog components in the same component yet
import { CanYouReadDialog }             from './dialogs/learning/can-you-read/can-you-read.component';
import { NotImplementedDialog }         from './dialogs/global/not-implemented/not-implemented.component';
import { GoHomeDialog }                 from './dialogs/global/go-home/go-home.component';   
import { QuizOrLearnDialog }            from './dialogs/learning/quiz-or-learn/quiz-or-learn.component';

//Current hack for all of the hover events
import { MouHover }                     from './hovers/learning/mou-hover/mou-hover.component';
import { SuguHover }                    from './hovers/learning/sugu-hover/sugu-hover.component';
import { DaHover }                      from './hovers/learning/da-hover/da-hover.component';
import { ZoHover }                      from './hovers/learning/zo-hover/zo-hover.component';
import { ExtenderHover }                from './hovers/learning/extender-hover/extender-hover.component';

//These are all of our custom services
import { DialogsService }               from './services/dialogs.service';
import { QuizService }                  from './services/quiz.service';
import { SidenavService }               from './services/sidenav.service';
import { HoverService }                 from './services/hover.service';

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
    QuizBody2Component,
    QuizBody3Component,
    QuizBody4Component,
    LearningComponent,
    LearningToolbarComponent,
    LearningBodyComponent,
    LearningBody2Component,
    LearningBody3Component,
    QuizBody5Component,
    QuizBody6Component,
    CanYouReadDialog,
    NotImplementedDialog,
    GoHomeDialog,
    QuizOrLearnDialog,
    AppendixComponent,
    HomeAppendixComponent,
    MouHover,
    SuguHover,
    DaHover,
    ZoHover,
    ExtenderHover
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
  exports: [
    NotImplementedDialog,
    GoHomeDialog,
    QuizOrLearnDialog,
    CanYouReadDialog,
    MouHover,
    SuguHover,
    DaHover,
    ZoHover,
    ExtenderHover
  ],
  entryComponents: [
    CanYouReadDialog,
    NotImplementedDialog,
    GoHomeDialog,
    QuizOrLearnDialog,
    MouHover,
    SuguHover,
    DaHover,
    ZoHover,
    ExtenderHover
  ],
  providers: [
    DialogsService,
    QuizService,
    SidenavService,
    HoverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }