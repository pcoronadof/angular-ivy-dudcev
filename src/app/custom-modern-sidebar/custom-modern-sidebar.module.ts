import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; // MatDrawerContainer

import { CustomModernSidebarComponent } from './custom-modern-sidebar.component';
import { AComponent } from '../content/a/a.component';
import { BComponent } from '../content/b/b.component';

const routes: Routes = [
  {
    path: 'aaaaa',
    component: AComponent,
    pathMatch: 'full',
  },
  {
    path: 'bbbbb',
    component: BComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [CustomModernSidebarComponent],
  exports: [CustomModernSidebarComponent],
})
export class CustomModernSidebarModule {}
