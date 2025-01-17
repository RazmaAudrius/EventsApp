import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { eventsAddComponent } from "./components/events-add/events-add.component";
import { eventsListComponent } from "./components/events-list/events-list.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, eventsAddComponent, eventsListComponent, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'events';
}
