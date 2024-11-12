import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventsAddComponent } from './events-add.component';

describe('eventsAddComponent', () => {
  let component: eventsAddComponent;
  let fixture: ComponentFixture<eventsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [eventsAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(eventsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
