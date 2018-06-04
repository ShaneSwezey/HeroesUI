import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../models/Hero';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroapiService {

  private heroesUrl = 'http://localhost:5000/api/heroes';

  constructor(private http: HttpClient) {}

  public getHeroes() {
    return this.http.get<Observable<Hero>>(this.heroesUrl);
  }

  public getHeroById(id: number) {
    return this.http.get<Hero>(this.heroesUrl + '/' + id);
  }

  public getHeroByName(name: string) {
    return this.http.get<Hero>(this.heroesUrl + '/name/' + name);
  }

  public getHeroesByRole(role: string) {
    return this.http.get<Observable<Hero>>(this.heroesUrl + '/role/' + role);
  }

  public getHeroesByUniverse(universe: string) {
    return this.http.get<Observable<Hero>>(this.heroesUrl + '/universe/' + universe);
  }

}
