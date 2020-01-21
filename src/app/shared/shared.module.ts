import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
	declarations: [SidenavComponent],
	imports: [CommonModule, RouterModule, FlexLayoutModule],
	exports: [SidenavComponent],
})
export class SharedModule {}
