import { TestBed, inject } from '@angular/core/testing';

import { ExcercisesService } from './excercises.service';

describe('ExcercisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcercisesService]
    });
  });

  it('should be created', inject([ExcercisesService], (service: ExcercisesService) => {
    expect(service).toBeTruthy();
  }));
});
