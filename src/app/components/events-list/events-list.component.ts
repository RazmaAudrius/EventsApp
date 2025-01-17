import { Component } from '@angular/core';
import { eventsService } from '../../services/events.service';
import { Event } from '../../models/Event';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class eventsListComponent {

  public events: Event[] = [];
  public isLoading = false;
  public isError = false;

  private loadData() {
    this.isLoading = true;
    this.eventsService.loadEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.isLoading = false;
        this.isError = false;
      },
      error: (data) => {
        this.isError = true;
        this.isLoading = false;
      }
    });
  }

  public constructor(private eventsService: eventsService){
    this.loadData();

  }

  public deleteEvent(id:string|null){
    if (id!=null){
      this.eventsService.deleteEvent(id).subscribe( ()=>{
        this.loadData();
      });
    }

  }

}
