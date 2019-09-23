import { Component, Output, EventEmitter } from '@angular/core';
import {JournalEntriesService} from '../../services/journal-entries.service'

@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {

isForm:boolean = false

  @Output() onPosted = new EventEmitter<string>();
  
  constructor( private journalEntriesService: JournalEntriesService){
  }

  ngOnInit() {

    // this.journalEntriesService.getJournalEntries().subscribe(entries =>this.entries=entries)
  }

  submitForm(myForm){
    console.log(myForm)

    this.journalEntriesService.saveEntry(myForm.value)
    .subscribe(() => this.onPosted.emit());
  }

  toggleForm(){
    this.isForm = !this.isForm;
  }

}
