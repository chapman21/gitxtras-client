import { Component, OnInit } from '@angular/core';



import { ActivatedRoute, Router} from '@angular/router';
import { Http, Response, Headers} from '@angular/http';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
	currentUser: any;
	currentOrgs: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  	 this.userService.getUser()
      .flatMap(result => {
        this.currentUser = result;
        return this.userService.getOrgs();
    	}).subscribe(result => {
        this.currentOrgs = result;
    })
  }

  goTo(value){
     this.router.navigate(['repos/'+ value]);
  }

}
