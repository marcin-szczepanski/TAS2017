import { TestBed, inject } from '@angular/core/testing';

import { SignInServiceService } from './sign-in-service.service';

describe('SignInServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInServiceService]
    });
  });

  it('should be created', inject([SignInServiceService], (service: SignInServiceService) => {
    expect(service).toBeTruthy();
  }));
});
