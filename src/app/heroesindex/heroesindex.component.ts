import { Component, OnInit } from '@angular/core';
import { HeroapiService } from '../services/heroapi.service';
import { Hero } from '../models/Hero';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroesindex',
  templateUrl: './heroesindex.component.html',
  styleUrls: ['./heroesindex.component.css'],
  providers: [ HeroapiService ]
})
export class HeroesindexComponent implements OnInit {

  private heroList: Observable<Hero>;

  constructor(private heroService: HeroapiService, private router: Router) { }

  ngOnInit() {
    this.getAllHereos();
  }

  private getAllHereos() {
    this.heroService.getHeroes().subscribe(result => this.heroList = result);
  }

  private getHeroesByRole(role: string) {
    this.heroService.getHeroesByRole(role).subscribe(result => this.heroList = result);
  }

  /*
  private getHero(name: string) {
   this.heroService.getHeroByName(name).subscribe(result => this.heroList = result);
  }
  */

  private goToHeroDetail(name: string) {
    console.log(`detail: ${name}`);
    this.router.navigate(['/herodetail', name]);
  }

}
