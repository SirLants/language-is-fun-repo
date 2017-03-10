import { NgModule }					from '@angular/core';
import { RouterModule, Routes }		from '@angular/router';

import { HomeBodyComponent }		from './home-body/home-body.component';
import { MangaBrowserComponent }	from './manga-browser/manga-browser.component';
import { UserProfileComponent }		from './user-profile/user-profile.component';

const routes: Routes = [
	{ path: '', 				redirectTo: '/home', 		pathMatch: 'full' },
	{ path: 'home', 		    component: HomeBodyComponent },
	{ path: 'manga-browser',    component: MangaBrowserComponent },
	{ path: 'user-profile', 	component: UserProfileComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}