import { Component } from '@angular/core';
import {JournalEntriesService} from '../../services/journal-entries.service'

@Component({
  selector: 'entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent {

  entries: Array<Object>;

  constructor( private journalEntriesService: JournalEntriesService){
  }

  getList(){
    this.journalEntriesService.getJournalEntries().subscribe(entries =>this.entries=entries)
  }

  ngOnInit() {

   this.getList()
  }

  refreshList(){
    this.getList()
  }

}
