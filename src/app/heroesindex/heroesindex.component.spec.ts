import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesindexComponent } from './heroesindex.component';

describe('HeroesindexComponent', () => {
  let component: HeroesindexComponent;
  let fixture: ComponentFixture<HeroesindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
