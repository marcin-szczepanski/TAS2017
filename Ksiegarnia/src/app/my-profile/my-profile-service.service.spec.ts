import { TestBed, inject } from '@angular/core/testing';

import { MyProfileServiceService } from './my-profile-service.service';

describe('MyProfileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyProfileServiceService]
    });
  });

  it('should be created', inject([MyProfileServiceService], (service: MyProfileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
