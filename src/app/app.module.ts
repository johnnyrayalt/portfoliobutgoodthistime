import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebProjectGridComponent } from './modules/web-project-grid/web-project-grid.component';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DefaultModule } from '@app/layouts/default/default.module';
import { ArtProjectGridComponent } from './modules/art-project-grid/art-project-grid.component';

@NgModule({
	declarations: [AppComponent, ArtProjectGridComponent, WebProjectGridComponent],
	imports: [BrowserModule, AppRoutingModule, DefaultModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
