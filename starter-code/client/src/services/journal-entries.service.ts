import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';




@Injectable()
export class JournalEntriesService {

  constructor(private http: Http) { }

  getJournalEntries() {

    return this.http.get(`${environment.baseUrl}/api/journal-entries`).map((res: Response) =>  res.json() 
)}

  getEntry(id) {

    return this.http.get(`${environment.baseUrl}/api/journal-entries/${id}`).map((res: Response) =>  res.json() 
  )}

  saveEntry(newEntry: Object) {

    return this.http.post(`${environment.baseUrl}/api/journal-entries`, newEntry)
    .map(res => {
      console.log(res);
      return res.json();
    });

  }

}