import { NgModule }								from '@angular/core';
import { RouterModule, Routes }					from '@angular/router';

import { HomeComponent }						from './home/home.component';
import { HomeBodyComponent }					from './home-body/home-body.component';
import { HomeMangaBrowserComponent }			from './home-manga-browser/home-manga-browser.component';
import { HomeAppendixComponent }				from './home-appendix/home-appendix.component';
import { UserProfileComponent }					from './user-profile/user-profile.component';
import { UserProfileSettingsComponent }			from './user-profile-settings/user-profile-settings.component';
import { UserProfileStatsComponent }			from './user-profile-stats/user-profile-stats.component';
import { UserProfileSocialComponent } 			from './user-profile-social/user-profile-social.component';

import { QuizComponent }						from './quiz/quiz.component';
import {QuizBodyComponent}						from './quiz-body/quiz-body.component';
import {QuizBody2Component}						from './quiz-body-2/quiz-body-2.component';
import {QuizBody3Component}						from './quiz-body-3/quiz-body-3.component';
import {QuizBody4Component}						from './quiz-body-4/quiz-body-4.component';
import {QuizBody5Component}						from './quiz-body-5/quiz-body-5.component';
import {QuizBody6Component}						from './quiz-body-6/quiz-body-6.component';


import { LearningComponent }					from './learning/learning.component';
import { LearningBodyComponent }				from './learning-body/learning-body.component';
import { LearningBody2Component }				from './learning-body-2/learning-body-2.component';
import { LearningBody3Component }				from './learning-body-3/learning-body-3.component';


const routes: Routes = [
	{ path: '', 								redirectTo: 'home',	 							pathMatch: 'full' },
	{ path: 'home',								component: HomeComponent, 						children: [
		{ path: '',									redirectTo: 'home-body',							pathMatch: 'full' },
		{ path: 'home-body', 		    			component: HomeBodyComponent },
		{ path: 'home-manga-browser',    			component: HomeMangaBrowserComponent },
		{ path: 'home-appendix',					component: HomeAppendixComponent },
		{ path: 'user-profile', 					component: UserProfileComponent, 					children: [
			{ path: '',									redirectTo: 'user-profile-settings',				pathMatch: 'full' },
			{ path: 'user-profile-settings',			component: UserProfileSettingsComponent},
			{ path: 'user-profile-stats',				component: UserProfileStatsComponent},
			{ path: 'user-profile-social',				component: UserProfileSocialComponent}
			]}
		]},
		{ path: 'quiz',								 component: QuizComponent,							children: [
			{ path: '',								 	redirectTo: 'quiz-body',							pathMatch: 'full' },
			{ path: 'quiz-body',                      	component: QuizBodyComponent },
			{ path: 'quiz-body-2',                   	component: QuizBody2Component },
			{ path: 'quiz-body-3',                   	component: QuizBody3Component },
			{ path: 'quiz-body-4',                   	component: QuizBody4Component },
			{ path: 'quiz-body-5',                   	component: QuizBody5Component },
			{ path: 'quiz-body-6',                   	component: QuizBody6Component }
		]},
		{ path: 'learning',							component: LearningComponent, 						children: [
			{ path: '',									redirectTo: 'learning-body',						pathMatch: 'full' },
			{ path: 'learning-body',					component: LearningBodyComponent },
			{ path: 'learning-body-2',					component: LearningBody2Component },
			{ path: 'learning-body-3', 					component: LearningBody3Component },

		]}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}