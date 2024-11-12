import { Component } from '@angular/core';
import { eventsService } from '../../services/events.service';
import { Event } from '../../models/Event';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class eventsListComponent {

  public events:Event[]=[];

  private loadData(){
    this.eventsService.loadEvents().subscribe( (data)=>{
      this.events =[];
      for (let k in data){
       data[k].id=k;
        this.events.push(data[k]);
      }
      console.log(this.events);
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
