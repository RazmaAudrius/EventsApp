import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventsEditComponent } from './events-edit.component';

describe('EventsEditComponent', () => {
  let component: eventsEditComponent;
  let fixture: ComponentFixture<eventsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [eventsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(eventsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
