import { Component } from '@angular/core';
import { eventsService } from '../../services/events.service';
import { Event } from '../../models/Event';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './events-add.component.html',
  styleUrl: './events-add.component.css'
})
export class eventsAddComponent {

  public name:string|null=null;
  public description:string|null=null;
  public location: string | null = null;
  public date: Date | null = null;

  public constructor(private eventsService:eventsService, private router:Router){

  }

  public addNewEvent(){
    
    if (this.description != null && this.name != null && this.location != null && this.date != null){
      
      const tmp: Event={
        description:this.description,
        name: this.name,
        date: this.date,
        location: this.location,    
        id:null
      };

      this.eventsService.addEvents(tmp).subscribe(()=>{
        this.router.navigate([""]);
      });
    }
  }

}
