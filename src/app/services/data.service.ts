import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('dataservice is connected');
  }

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  getOffertes() {
    return this.http.get('/api/secundaireCollectorOffertes')
      .map(res => res.json());
  }

  getContactaanvragen() {
    return this.http.get('/api/contactaanvragen')
      .map(res => res.json());
  }

  postContact(contact:string) {
    this.http.post('/api/contact', contact, {headers: this.headers})
    .subscribe(data => {
      return data.json();
    });
  }
}