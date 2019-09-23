import { Component } from '@angular/core';
import {JournalEntriesService} from '../../services/journal-entries.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent {

  entry: Object;

  constructor( private journalEntriesService: JournalEntriesService, private route: ActivatedRoute){
  }

  ngOnInit() {


    this.route.params.subscribe(params => 
      this.journalEntriesService.getEntry(params.id).subscribe(entry =>this.entry=entry) )

}

getLo(){
  console.log(this.entry)
}
}
