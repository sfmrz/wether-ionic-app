import { TestBed } from '@angular/core/testing';

import { WhetherApiService } from './whether-api.service';

describe('WhetherApiService', () => {
  let service: WhetherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhetherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
