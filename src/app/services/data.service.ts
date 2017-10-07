import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('dataservice is connected');
  }

  getOffertes() {
    return this.http.get('/api/primaireCollectorOffertes')
      .map(res => res.json());
  }
}