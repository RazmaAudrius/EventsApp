import { Component } from '@angular/core';
import { eventsService } from '../../services/events.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public count = 0;
  constructor(private eventsService: eventsService) {
    this.eventsService.onEventsCountChange.subscribe(() => {
      this.count = this.eventsService.getCount();
    });

  }
}
