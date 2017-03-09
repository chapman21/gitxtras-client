import { NgModule, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Rx';

import { ActivatedRoute, Router} from '@angular/router';
import { Http, Response, Headers} from '@angular/http';

import { ModalDirective } from 'ng2-bootstrap/modal';
import { UserService } from '../../services/user.service';
import { EmitterService } from '../../services/emitter.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  @ViewChild('staticModal') staticModal:ModalDirective;
  archive$ = new Subject();
	currentUser;
  user;
  currentRepo: any;
  success: boolean = false;
  alerts: any = [];
  activeLink: string;
  sortingFilter: string;
  alphabeticalFilter: string;
  accountTypeFilter: string;
  private subscription;
  private sub: any;
 

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private http: Http, private emitter: EmitterService) { }
 
  ngOnInit(){
    this.userService.getUser()
    .flatMap(result => {
      this.user = result;
      return this.route.params
    }).subscribe(params => {
      var temp = [];
      temp = this.user.repos.filter((item) => {
        return item.owner.login === params['id'];
      })
      this.currentUser = temp;
      return this.archive$;
    })

    this.archive$.subscribe((value) => {
      console.log(value)
      this.archiveIt(value)
    });

    this.subscription = this.emitter.subscribe(msg => {
      if(typeof msg !== 'string'){
        this.accountFilter(msg)
      }
      console.log(msg)
      this.sortFilter(msg)
    })

   
  }

  private archiveIt(repo):void {
    this.userService.archive(repo)
      .subscribe(result => {
      this.add(repo);
    });
  }

  private showModal(repo):void {
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

  private setActive(active){
    this.activeLink = active;
  }

  private sortFilter(filter){
    return this.sortingFilter = filter;
  }

   private accountFilter(filter){
    return this.accountTypeFilter = filter;
  }

  private alphaFilter(filter){
    return this.alphabeticalFilter = filter;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
