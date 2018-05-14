import { Component, OnInit } from '@angular/core';
import { Launch } from 'e2e/Models/Launch';
import { SpacexApiService } from '../providers/spacex-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  tabOneLabel = 'Tab one';
  tabTwoLabel = 'Tab two';
  tabOneContent = 'Hello from tab 1';
    
  user = {
    name: 'toto',
    age: 2,
    email: 'toto.baby@gmail.com'
  };

  launches: Launch[];

  constructor(
    private spaceServices: SpacexApiService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches() {
    this.spaceServices.fetchAll().subscribe(
      (data: Launch[]) => this.launches = data
    );
  }

  navigateToPage2() {
    this.router.navigate(['page2']);
  }
}
