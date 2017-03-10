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
	{ path: 'quiz',								component: QuizComponent },
	{ path: 'learning',							component: LearningComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}