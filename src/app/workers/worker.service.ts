import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Worker} from './worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
    // URL which returns random person JSON data (API end-point URL)
    private readonly URL = 'https://randomuser.me/api/?inc=gender,name,nat,picture,id';

  constructor(private httpClient: HttpClient) { }

  getWorkerData(): Observable<Worker> {
      console.log('Request is sent!');
      // this.http is a HttpClient library provide by @angular/common
      // we are calling .get() method over this.http object
      // this .get() method takes URL to call API
      return this.httpClient.get<Worker>(this.URL);
    }

}
