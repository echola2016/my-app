import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroServiceService} from "../hero-service.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  title = 'app';

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroServiceService
    ) {
  }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    debugger;
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(data => this.hero= data);
  }


}

export class Hero {
  id: number;
  name: string;
}


