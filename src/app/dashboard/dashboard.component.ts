import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero-detail/hero-detail.component";
import {HeroServiceService} from "../hero-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
     this.getHeroes();
  }
  getHeroes(): void {
      this.heroService.getHerores().subscribe(data => this.heroes = data.slice(1, 5));
  }

}
