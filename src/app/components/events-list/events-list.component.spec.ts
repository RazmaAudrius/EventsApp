import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventsListComponent } from './events-list.component';

describe('GoodsListComponent', () => {
  let component: eventsListComponent;
  let fixture: ComponentFixture<eventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [eventsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(eventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
