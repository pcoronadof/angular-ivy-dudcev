import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CustomModernSidebarModule } from './custom-modern-sidebar/custom-modern-sidebar.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CustomModernSidebarModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
