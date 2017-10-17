import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-offertes',
  templateUrl: './offertes.component.html',
  styleUrls: ['./offertes.component.css']
})
export class OffertesComponent implements OnInit {

  offertes:Offerte[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOffertes().subscribe((offertes) => {
      this.offertes = offertes.data;
    });
  }

}

interface Offerte {
  offerteid: string,
  creationTime: Date,
  omschrijving: string,
  onderdeel: string
}
