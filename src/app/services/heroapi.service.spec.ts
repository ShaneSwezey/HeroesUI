import { TestBed, inject } from '@angular/core/testing';

import { HeroapiService } from './heroapi.service';

describe('HeroapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroapiService]
    });
  });

  it('should be created', inject([HeroapiService], (service: HeroapiService) => {
    expect(service).toBeTruthy();
  }));
});
