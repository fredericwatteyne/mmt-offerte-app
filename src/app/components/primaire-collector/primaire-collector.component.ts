import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primaire-collector',
  templateUrl: './primaire-collector.component.html',
  styleUrls: ['./primaire-collector.component.css']
})
export class PrimaireCollectorComponent implements OnInit {
  afstandTussenUitgangen:number;
  uitgangen: PrimaireCollectorUitgang[];

  constructor() { }

  ngOnInit() {
    this.afstandTussenUitgangen = 20;

    this.uitgangen = [new PrimaireCollectorUitgang(20, false)
                        , new PrimaireCollectorUitgang(20, true)
                        , new PrimaireCollectorUitgang(8, false) ];
  }
}

class PrimaireCollectorUitgang {
  diameter:number;
  heeftScroefdraad:Boolean;

  constructor(diameter, heeftScroefdraad){
    this.diameter = diameter;
    this.heeftScroefdraad = heeftScroefdraad;
  }
}