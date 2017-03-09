import { Component, OnInit } from '@angular/core';

import { EmitterService } from '../../services/emitter.service';

@Component({
  selector: 'app-repo-filters',
  templateUrl: './repo-filters.component.html',
  styleUrls: ['./repo-filters.component.scss']
})
export class RepoFiltersComponent implements OnInit {
	activeLink: string;

  constructor(private emitter: EmitterService){ }

  ngOnInit() {
  }

  private sortFilter(value) {
  	this.activeLink = value;
    this.emitter.next(value);
  }

}
