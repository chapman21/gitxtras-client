import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';

import { EmitterService } from '../../services/emitter.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
	activeLink: string;
	@Input() currentUser;


  constructor(private router: Router,private emitter: EmitterService) { }

  ngOnInit() {
    console.log(this.currentUser)
  }

  private goTo(value) {
    this.router.navigate([value]);
   //  console.log(this.currentUser)
   //  let data = {
   //    type: value,
   //    currentUser: this.currentUser.user.login
   //  }
  	// this.activeLink = value;
   //  this.emitter.next(data);
  }

  private goToPersonal(value){
    this.router.navigate(['repos/'+ value]);
  }

}
