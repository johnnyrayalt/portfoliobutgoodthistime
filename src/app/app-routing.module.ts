import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
	{ path: '', component: AppComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'about', component: AboutComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
