import { TestBed } from '@angular/core/testing';

import { PlantsService } from './plants.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PlantsService = TestBed.get(PlantsService);
    expect(service).toBeTruthy();
  });
});
