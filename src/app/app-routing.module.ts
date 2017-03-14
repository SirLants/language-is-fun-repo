import { NgModule }								from '@angular/core';
import { RouterModule, Routes }					from '@angular/router';

import { HomeComponent }						from './home/home.component';
import { HomeBodyComponent }					from './home-body/home-body.component';
import { HomeMangaBrowserComponent }			from './home-manga-browser/home-manga-browser.component';
import { UserProfileComponent }					from './user-profile/user-profile.component';
import { UserProfileSettingsComponent }			from './user-profile-settings/user-profile-settings.component';
import { UserProfileStatsComponent }			from './user-profile-stats/user-profile-stats.component';
import { UserProfileSocialComponent } 			from './user-profile-social/user-profile-social.component';

import { QuizComponent }						from './quiz/quiz.component';
import { LearningComponent }					from './learning/learning.component';


import {QuizScreen1Component}					from './quiz-screen-1/quiz-screen-1.component';
import {QuizScreen2Component}					from './quiz-screen-2/quiz-screen-2.component';
import {QuizScreen3Component}					from './quiz-screen-3/quiz-screen-3.component';
import {QuizScreen4Component}					from './quiz-screen-4/quiz-screen-4.component';


import {LearningScreen1Component}				from './learning-screen-1/learning-screen-1.component';
import {LearningScreen2Component}				from './learning-screen-2/learning-screen-2.component';
import {LearningScreen3Component}				from './learning-screen-3/learning-screen-3.component';


const routes: Routes = [
	{ path: '', 								redirectTo: 'home',	 							pathMatch: 'full' },
	{ path: 'home',								component: HomeComponent, 						children: [
		{ path: '',									redirectTo: 'home-body',							pathMatch: 'full' },
		{ path: 'home-body', 		    			component: HomeBodyComponent },
		{ path: 'home-manga-browser',    			component: HomeMangaBrowserComponent },
		{ path: 'user-profile', 					component: UserProfileComponent, 					children: [
			{path: '',									redirectTo: 'user-profile-settings',				pathMatch: 'full' },
			{path: 'user-profile-settings',				component: UserProfileSettingsComponent},
			{path: 'user-profile-stats',				component: UserProfileStatsComponent},
			{path: 'user-profile-social',				component: UserProfileSocialComponent}
		]}
	]},

	{ path: 'quiz',								component: QuizComponent},
		{path: '',								redirectTo: 'quiz',			pathMatch: 'full'},
    	{path: 'quiz-screen-1',					component: QuizScreen1Component },
		{path: 'quiz-screen-2',					component: QuizScreen2Component },
		{path: 'quiz-screen-3',					component: QuizScreen3Component },
		{path: 'quiz-screen-4',				    component: QuizScreen4Component },

	

	{ path: 'learning',							component: LearningComponent },
		{path: 'learning-screen-1',             component: LearningScreen1Component },
		{path: 'learning-screen-2',             component: LearningScreen2Component },
		{path: 'learning-screen-3',             component: LearningScreen3Component },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}