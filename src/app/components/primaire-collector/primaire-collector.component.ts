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

  deleteUitgang(j) {
    this.uitgangen.splice(j,1);
  }

  addUitgang(j) {
    this.uitgangen.push(new PrimaireCollectorUitgang(20, false));
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

//sortering van de uitgangen, moet ik me daar zorgen in maken?
//benaming van de componenten in het nederlands?
//volledige component in 1 object => is dat ok?
//