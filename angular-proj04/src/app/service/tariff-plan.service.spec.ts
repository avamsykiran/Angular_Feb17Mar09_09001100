import { TestBed } from '@angular/core/testing';

import { TariffPlanService } from './tariff-plan.service';

describe('TariffPlanService', () => {
  let service: TariffPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
