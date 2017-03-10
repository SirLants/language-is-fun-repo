import { NgModule }								from '@angular/core';
import { RouterModule, Routes }					from '@angular/router';

import { HomeBodyComponent }					from './home-body/home-body.component';
import { HomeMangaBrowserComponent }			from './home-manga-browser/home-manga-browser.component';
import { UserProfileComponent }					from './user-profile/user-profile.component';

import { UserProfileSettingsComponent }			from './user-profile-settings/user-profile-settings.component';
import { UserProfileStatsComponent }			from './user-profile-stats/user-profile-stats.component';
import { UserProfileSocialComponent } 			from './user-profile-social/user-profile-social.component';

const routes: Routes = [
	{ path: '', 								redirectTo: '/home',	 							pathMatch: 'full' },
	{ path: 'home', 		    				component: HomeBodyComponent },
	{ path: 'home-manga-browser',    			component: HomeMangaBrowserComponent },
	{ path: 'user-profile', 					component: UserProfileComponent, 					children: [
		{path: '',								redirectTo: 'user-profile-settings',				pathMatch: 'full' },
		{path: 'user-profile-settings',			component: UserProfileSettingsComponent},
		{path: 'user-profile-stats',			component: UserProfileStatsComponent},
		{path: 'user-profile-social',			component: UserProfileSocialComponent}
	]}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}