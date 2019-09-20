import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map'




@Injectable()
export class JournalEntriesService {

  constructor(private http: Http) { }

  getJournalEntries() {

    return this.http.get(`${environment.baseUrl}/api/journal-entries`).map((res: Response) =>  res.json() 
     )

}
}