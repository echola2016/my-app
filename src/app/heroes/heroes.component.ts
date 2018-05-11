import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero-detail/hero-detail.component";
import {HeroServiceService} from "../hero-service.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] ;
  selectedHero: Hero;
  constructor(private heroServcie: HeroServiceService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onselect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroServcie.getHerores().subscribe(data => this.heroes = data);
  }

}
