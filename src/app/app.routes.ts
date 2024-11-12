import { Routes } from '@angular/router';
import { eventsListComponent } from './components/events-list/events-list.component';
import { eventsAddComponent } from './components/events-add/events-add.component';
import { eventsEditComponent } from './components/events-edit/events-edit.component';

export const routes: Routes = [
  { path: "", component: eventsListComponent },
  { path: "add-events", component: eventsAddComponent },
    {path:"event/:id", component:eventsEditComponent}
];
