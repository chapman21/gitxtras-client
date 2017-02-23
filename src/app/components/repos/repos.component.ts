import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Rx';



import { ActivatedRoute, Router} from '@angular/router';
import { Http, Response, Headers} from '@angular/http';

import { ModalDirective } from 'ng2-bootstrap/modal';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @ViewChild('staticModal') staticModal:ModalDirective;
  archive$ = new Subject();
	currentUser;
  currentRepo: any;
  success: boolean = false;
  alerts: any = [];


  constructor(private router: Router, private userService: UserService, private http: Http) { }

  ngOnInit(){
    this.userService.getUser()
      .subscribe(result => {
        if(!result.user.login){
          this.router.navigate(['/']);
        }
        this.currentUser = result;   
    })

    this.archive$.subscribe((value) => {
      console.log(value)
      this.archiveIt(value)
    });
  }

  private archiveIt(repo):void {
    this.userService.archive(repo)
      .subscribe(result => {
      this.add(repo);
    });
  }

  private showModal(repo):void {
    console.log("At the show modal", repo)
    this.currentRepo = repo;
    this.staticModal.show();
  }

  private add(repo): void {
    console.log(repo)
    this.alerts.push({
      type: 'info',
      msg: `You have archived the ${repo} repository. (archived: ${(new Date()).toLocaleTimeString()})`,
      timeout: 5000
    });
  }

}
