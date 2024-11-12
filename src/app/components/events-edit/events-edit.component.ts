import { Component } from '@angular/core';
import { eventsService } from '../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './events-edit.component.html',
  styleUrl: './events-edit.component.css'
})
export class eventsEditComponent {
  public id: string;
  public name: string | null = null;
  public date: Date | null = null;
  public location: string | null = null;
  public description: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private eventsService:eventsService){
    this.id=this.route.snapshot.params["id"];
    this.eventsService.loadEvent(this.id).subscribe( (event)=>{
      this.name = event.name;
      this.description = event.description;
      this.date = event.date;
      this.location = event.location;

    });
  }

  public updateRecord(){
    if (this.name != null && this.description != null && this.date != null && this.location != null){
      this.eventsService.updateEvent({
        id: this.id,
        name: this.name,
        date: this.date,
        location: this.location,
        description: this.description,

      }).subscribe(()=>{
        this.router.navigate([""]);

      });
    }
  }

}
