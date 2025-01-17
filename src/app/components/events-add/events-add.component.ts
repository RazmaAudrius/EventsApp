import { Component } from '@angular/core';
import { eventsService } from '../../services/events.service';
import { Event } from '../../models/Event';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-events-add',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './events-add.component.html',
  styleUrl: './events-add.component.css'
})
export class eventsAddComponent {

  public name:string|null=null;
  public description:string|null=null;
  public location: string | null = null;
  public date: Date | null = null;
  public isLoading = false;
  public isError = false;
  public constructor(private eventsService:eventsService, private router:Router){

  }

  public addNewEvent(f: NgForm){
          
    const tmp: Event = {
        description: f.form.value.description,
        name: f.form.value.name,
        date: f.form.value.date,
        location: f.form.value.location,    
        id:null
      };
      this.isLoading = true;
      this.eventsService.addEvents(tmp).subscribe({
        next: () => {
          this.isLoading = false;
          this.isError = false;
          this.router.navigate(["/list"]);
        },
        error: () => {
          this.isError = true;
          this.isLoading = false;
        }
      });
    
  }

}
