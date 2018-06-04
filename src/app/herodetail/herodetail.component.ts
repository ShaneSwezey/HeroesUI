import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroapiService} from '../services/heroapi.service';
import { Hero } from '../models/Hero';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css'],
  providers: [ HeroapiService ]
})
export class HerodetailComponent implements OnInit {

  private hero;

  constructor(private heroService: HeroapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>  {
      const name = params['name'];
      console.log(`hero name = ${name}`);
      this.getHero(name);
    });
  }

  private getHero(name: string) {
    if (name != null || name.length !== 0) {
      return this.heroService.getHeroByName(name).subscribe(result => this.hero = result);
    }
  }
}
