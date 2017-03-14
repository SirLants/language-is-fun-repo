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
import {QuizBodyComponent}						from './quiz-body/quiz-body.component';
import {QuizBody2Component}						from './quiz-body-2/quiz-body-2.component';
import {QuizBody3Component}						from './quiz-body-3/quiz-body-3.component';
import {QuizBody4Component}						from './quiz-body-4/quiz-body-4.component';



import { LearningComponent }					from './learning/learning.component';



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



	{ path: 'quiz',								 component: QuizComponent ,				children: [
		{ path: '',								 redirectTo: 'quiz-body',				pathMatch: 'full' },
		{ path: 'quiz-body',                      component: QuizBodyComponent },
		{ path: 'quiz-body-2',                   component: QuizBody2Component},
		{ path: 'quiz-body-3',                   component: QuizBody2Component},
		{ path: 'quiz-body-4',                   component: QuizBody2Component},

	]},


	
	{ path: 'learning',							component: LearningComponent }




];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}