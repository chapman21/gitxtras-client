import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

  constructor(private http: Http) { }

  public getUser():any{
  	return this.http.get(`${environment.apiBaseUrl}/repos`, {})
  		.map((res:Response) => {
  			return res.json(); 
  		});
  }

  public getOrgs():any{
    return this.http.get(`${environment.apiBaseUrl}/orgs`, {})
      .map((res:Response) => {
        return res.json(); 
      });
  }

  archive(repo: string): Observable<void> {
    return this.http.post(
        `${environment.apiBaseUrl}/archive`,
        {repo: repo})
        .map((response: Response) => {
           console.log(response)
        });
  }


}
