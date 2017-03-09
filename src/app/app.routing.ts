import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { ReposComponent } from './components/repos/repos.component';


import { UserService } from './services/user.service';

const routes = [
  {path:'', component: HomeComponent},
  {path:'organizations', component: OrganizationsComponent},
  {path:'repos/:id', component: ReposComponent}
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);