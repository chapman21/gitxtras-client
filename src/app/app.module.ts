import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing} from './app.routing';

import { UserService } from './services/user.service';
import { EmitterService } from './services/emitter.service';

import { SortByPipe, SortByAccountType} from './filters/sortByPipe';

import { AlertModule, ModalModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReposComponent } from './components/repos/repos.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RepoFiltersComponent } from './components/repo-filters/repo-filters.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ReposComponent,
    SortByPipe,
    SortByAccountType,
    MainNavComponent,
    RepoFiltersComponent,
    OrganizationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [UserService, EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
