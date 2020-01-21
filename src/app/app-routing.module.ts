import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '@app/layouts/default/default.component';
import { ArtProjectGridComponent } from './modules/art-project-grid/art-project-grid.component';
import { WebProjectGridComponent } from './modules/web-project-grid/web-project-grid.component';

import { AboutComponent } from '@app/modules/about/about.component';
import { ProjectsComponent } from '@app/modules/projects/projects.component';

const routes: Routes = [
	{
		path: '',
		component: DefaultComponent,
		children: [
			{
				path: 'projects',
				component: ProjectsComponent,
			},
			{
				path: 'projects/web',
				component: WebProjectGridComponent,
			},
			{
				path: 'projects/art',
				component: ArtProjectGridComponent,
			},
			{
				path: 'about',
				component: AboutComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
