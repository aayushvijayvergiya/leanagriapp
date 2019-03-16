import { TestBed, inject } from '@angular/core/testing';

import { ApiMainService } from './api-main.service';

describe('ApiMainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiMainService]
    });
  });

  it('should be created', inject([ApiMainService], (service: ApiMainService) => {
    expect(service).toBeTruthy();
  }));
});
