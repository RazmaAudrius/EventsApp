import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class eventsService {

  constructor(private http:HttpClient) { }

  public addEvents(event: Event){
    return this.http.post("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events.json", event);
  }

  public loadEvents(){
    return this.http.get<{ [key: string]: Event }>("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events.json");
  }

  public loadEvent(id:string){
    return this.http.get<Event>("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events/"+id+".json");
  }
  public updateEvent(event: Event){
    return this.http.patch("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events/" + event.id + ".json", event);
  }

  public deleteEvent(id:string){
    return this.http.delete("https://ku-2024-default-rtdb.europe-west1.firebasedatabase.app/events/"+id+".json");
  }

}
