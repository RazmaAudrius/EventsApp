import { Component } from '@angular/core';
import { eventsService } from '../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-events-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './events-edit.component.html',
  styleUrl: './events-edit.component.css'
})
export class eventsEditComponent {
  public id: string;
  public name: string | null = null;
  public date: Date | null = null;
  public location: string | null = null;
  public description: string | null = null;
  public isLoading = false;
  public isError = false;

  constructor(private route: ActivatedRoute, private router: Router, private eventsService:eventsService){
    this.id=this.route.snapshot.params["id"];
    this.eventsService.loadEvent(this.id).subscribe( (event)=>{
      this.name = event.name;
      this.description = event.description;
      this.date = event.date;
      this.location = event.location;
      this.isLoading = false;
    });
  }

  public updateRecord(f: NgForm){    
      this.isLoading = true;
      this.eventsService.updateEvent({
        id: this.id,
        name: f.form.value.name,
        date: f.form.value.date,
        location: f.form.value.location,
        description: f.form.value.description,

      }).subscribe({
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
