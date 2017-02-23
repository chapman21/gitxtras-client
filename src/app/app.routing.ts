import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ReposComponent } from './components/repos/repos.component';

import { UserService } from './services/user.service';

const routes = [
  {path:'', component: HomeComponent},
  {path:'repos', component: ReposComponent}
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);