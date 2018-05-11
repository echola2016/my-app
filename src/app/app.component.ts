import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Hero} from './hero-detail/hero-detail.component';
import {HEROES} from './mock-heroes';
import {HeroServiceService} from "./hero-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  heroes: Hero[] ;
  selectedHero: Hero;
  ngOnInit(): void {
  }
  constructor(private heroServcie: HeroServiceService) { }


}




