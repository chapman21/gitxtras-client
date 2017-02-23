import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService{

  constructor(private http: Http) { }

  getUser(){
  	return this.http.get('http://localhost:3000/repos', {})
  		.map((res:Response) => {
  			return res.json(); 
  		});
  }

  public getOrgs():any{
    return this.http.get('http://localhost:3000/orgs', {})
      .map((res:Response) => {
        return res.json(); 
      });
  }

  archive(repo: string): Observable<void> {
    return this.http.post(
        'http://localhost:3000/archive',
        {repo: repo})
        .map((response: Response) => {
           console.log(response)
        });
  }


}
