import { TestBed } from '@angular/core/testing';

import { eventsService } from './events.service';

describe('eventsService', () => {
  let service: eventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(eventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
