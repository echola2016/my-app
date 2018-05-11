///<reference path="hero-detail/hero-detail.component.ts"/>
import { Injectable } from '@angular/core';
import {Hero} from './hero-detail/hero-detail.component';
import {HEROES} from './mock-heroes';
import { Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroServiceService {

  constructor(private messageService: MessageService) { }

  getHerores(): Observable<Hero[]> {
    this.messageService.add('get herores');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`add service with id ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
