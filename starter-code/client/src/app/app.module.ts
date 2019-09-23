import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JournalEntriesService} from '../services/journal-entries.service'
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

const routes = [
  { path:'', component: EntryListComponent},
  { path: ':id', component: SingleEntryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SingleEntryComponent,
    EntryListComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
