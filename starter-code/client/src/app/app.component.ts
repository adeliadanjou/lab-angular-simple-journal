import { Component } from '@angular/core';
import {JournalEntriesService} from '../services/journal-entries.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entries: Array<Object>;

  constructor( private journalEntriesService: JournalEntriesService){
  }

  ngOnInit() {

    this.journalEntriesService.getJournalEntries().subscribe(entries =>this.entries=entries)
  }


  getList = () => {console.log(this.entries) }
}
