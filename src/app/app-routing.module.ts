import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '@app/layouts/default/default.component';

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
