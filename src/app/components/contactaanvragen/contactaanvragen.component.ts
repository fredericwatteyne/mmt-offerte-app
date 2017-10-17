import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contactaanvragen',
  templateUrl: './contactaanvragen.component.html',
  styleUrls: ['./contactaanvragen.component.css']
})
export class ContactaanvragenComponent implements OnInit {

  contactaanvragen:Contact[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getContactaanvragen().subscribe((contactaanvragen) => {
      this.contactaanvragen = contactaanvragen.data;
    });
  }

}

class Contact {
  contactid:String;
  naam:String;
  bedrijf:string;
  email:string;
  tel:string;
  bericht:string;

  constructor(){
    this.bedrijf = '';
    this.tel = '';
  }
}