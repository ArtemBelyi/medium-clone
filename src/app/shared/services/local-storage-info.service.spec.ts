import { TestBed } from '@angular/core/testing';

import { LocalStorageInfoService } from './local-storage-info.service';

describe('LocalStorageInfoService', () => {
  let service: LocalStorageInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
