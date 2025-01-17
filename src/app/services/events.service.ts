import { EventEmitter,Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class eventsService {

  private events: Event[] = [];
  public onEventsCountChange = new EventEmitter();
    constructor(private http: HttpClient, private auth: AuthService) { }

  public addEvents(event: Event){
    return this.http.post("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events.json", event, {
      params: {
        "auth": this.auth.idToken
      }
    });
  }

  public loadEvents(){    
    return this.http
      .get<{ [key: string]: Event }>("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events.json", {
        params: {
          "auth": this.auth.idToken
        }
      })
      .pipe(
        map((data): Event[] => {
          const events = [];
          for (let k in data) {
            data[k].id = k;
            events.push(data[k]);
          }
          return events;
        }),
        tap((data) => {
          this.events = data;
          this.onEventsCountChange.emit();
        })
      )
  }

  public loadEvent(id:string){
    return this.http.get<Event>("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events/" + id + ".json",{
      params: {
        "auth": this.auth.idToken
      }
    });
  }
  public updateEvent(event: Event){
    return this.http.patch("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events/" + event.id + ".json", event, {
      params: {
        "auth": this.auth.idToken
      }
    });
  }

  public deleteEvent(id:string){
    return this.http.delete("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events/" + id + ".json", {
      params: {
        "auth": this.auth.idToken
      }
    });
  }

  public getCount() {
    return this.events.length;
  }

}
