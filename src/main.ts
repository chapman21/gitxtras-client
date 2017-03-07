import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


//THIS IS A HACK FOR NG2-BOOTSTRAP TO WORK WITH BOOTSTRAP VERSION 4
import { window } from 'ng2-bootstrap/utils/facade/browser';
import { isBs3 } from 'ng2-bootstrap/utils/ng2-bootstrap-config';    
if(isBs3){
	window.__theme = 'bs4';
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);