import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    this.contact = new Contact();
  }

  submitContact() {
    var r = JSON.stringify(this.contact);
    console.log(r);
    this.dataService.postContact(r);
  }

}

class Contact {
  naam:String;
  bedrijf:string;
  email:string;
  tel:string;
  bericht:string;
}