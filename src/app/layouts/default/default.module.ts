import { WebProjectGridComponent } from './../../modules/web-project-grid/web-project-grid.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from '@app/layouts/default/default.component';
import { AboutComponent } from '@app/modules/about/about.component';
import { ProjectsComponent } from '@app/modules/projects/projects.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
	declarations: [DefaultComponent, ProjectsComponent, AboutComponent, WebProjectGridComponent],
	imports: [CommonModule, RouterModule, FlexLayoutModule, SharedModule],
})
export class DefaultModule {}
