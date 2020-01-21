import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DefaultModule } from '@app/layouts/default/default.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, DefaultModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
