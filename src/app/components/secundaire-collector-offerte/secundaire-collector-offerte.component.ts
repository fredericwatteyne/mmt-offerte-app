import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-secundaire-collector-offerte',
  templateUrl: './secundaire-collector-offerte.component.html',
  styleUrls: ['./secundaire-collector-offerte.component.css']
})
export class SecundaireCollectorOfferteComponent implements OnInit, AfterViewInit {

  model: SecundaireCollector;
  isEdit:boolean = true;

  @ViewChild('myCanvas') canvasRef: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.model = new SecundaireCollector();
  }

  ngAfterViewInit() {
    this.drawPrimaireCollector();
  }
  
  requestOfferte() {
    this.model.offerteId = Guid.newGuid();
    this.isEdit = false;
  }

  resetOfferte() {
    this.model.resetOfferte();
  }

  drawPrimaireCollector() {
    console.log("drawPrimaireCollector");
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    ctx.clearRect(0, 0, 1000, 400);

    ctx.beginPath();

    ctx.moveTo(100, 140);
    ctx.lineTo(100 * this.model.circuits.length + 150, 140);
    ctx.stroke();

    ctx.moveTo(100, 240);
    ctx.lineTo(100 * this.model.circuits.length + 150, 240);
    ctx.stroke();

    var i = 0;
    for (let u of this.model.circuits) {

      //Lijn uit
      ctx.moveTo(150 + i * 100, 100);
      ctx.lineTo(150 + i * 100, 140);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(150 + i * 100, 140,2,0,2*Math.PI);
      ctx.fill();
      ctx.stroke();
      
      //Lijn terug
      ctx.moveTo(200 + i * 100, 144);
      ctx.lineTo(200 + i * 100, 240);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(200 + i * 100, 140, 4, 1.5 * Math.PI, 2.5 * Math.PI, false);
      ctx.stroke();

      ctx.moveTo(200 + i * 100, 100);
      ctx.lineTo(200 + i * 100, 136);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(200 + i * 100, 240,2,0,2*Math.PI);
      ctx.fill();
      ctx.stroke();

      ctx.font = "13px Arial";
      ctx.fillText("C" + (i + 1),150 + i * 100, 60);
      
      ctx.font = "10px Arial";
      ctx.fillText("DN" + u.diameter,150 + i * 100, 70);
      ctx.fillText(u.aansluiting,150 + i * 100, 80);

      if (u.aansluiting.indexOf("P") >= 0 ) {

        ctx.moveTo(145 + i * 100, 95);
        ctx.lineTo(155 + i * 100, 95);
        ctx.stroke();

        ctx.moveTo(195 + i * 100, 95);
        ctx.lineTo(205 + i * 100, 95);
        ctx.stroke();

      } else if (u.aansluiting.indexOf("\"") >= 0 ) {

        ctx.moveTo(150 + i * 100, 95);
        ctx.lineTo(150 + i * 100, 90);
        ctx.stroke();

        ctx.moveTo(200 + i * 100, 95);
        ctx.lineTo(200 + i * 100, 90);
        ctx.stroke();

      }

      i++;
    }
  }

  deleteCircuit(j:number) {
    this.model.deleteCircuit(j);
    this.drawPrimaireCollector();
  }

  addCircuit(j:number) {
    this.model.addCircuit(j);
    this.drawPrimaireCollector();
  }

  debietUpdated() {
    this.model.calculateFromNewDebiet();
    this.drawPrimaireCollector();
  }

  vermogenUpdated() {
    this.model.calculateFromNewVermogen();
    this.drawPrimaireCollector();
  }

  temperatuurVerschilUpdated() {
    this.model.calculateFromNewTemperatuurVerschil();
    this.drawPrimaireCollector();
  }

  diameterUpdated(j:number){
    this.model.circuits[j].checkCircuitAansluitingen();
    this.drawPrimaireCollector();
  }

  watersnelheidUpdated() {
    this.drawPrimaireCollector();
  }

  checkCircuitDiameters() {
    this.model.checkCircuitDiameters();
    this.drawPrimaireCollector();
  }

}

class SecundaireCollector {
  offerteId:string;

  debiet:number;
  vermogen:number;
  temperatuurVerschil:number;
  watersnelheid:number;
  diameter:number;

  circuits: SecundaireCollectorCircuit[];

  afstandTussenCircuits:number;
  
  constructor() {
    this.resetOfferte();
  }

  aansluitingOmschrijving(aansluiting:string): string {
    if (aansluiting == "Lasnaad" ) {
      return aansluiting;
    }
    if (aansluiting )
    return aansluiting;
  }

  mogelijkeDiameters(): number[] {
    return [50, 65, 80, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600];
  }

  mogelijkeDiametersMetFilter(): number[] {
    var o = this.diameter;
    return [15, 20, 25, 50, 65, 80, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600].filter(function(value){
      return value >= o / 2 && value < o;
    });
  }
  
  calculateFromNewDebiet() {
    this.vermogen = this.debiet * this.temperatuurVerschil / 0.86;
    var oppervlakte = this.debiet / 3600 / this.watersnelheid;
    this.setDiameterFromOppervlakte(oppervlakte);
  }
  
  calculateFromNewTemperatuurVerschil() {
    this.debiet = this.vermogen * 0.86 / this.temperatuurVerschil;
    var oppervlakte = this.debiet / 3600 / this.watersnelheid;
    this.setDiameterFromOppervlakte(oppervlakte);
  }
  
  calculateFromNewVermogen() {
    this.debiet = this.vermogen * 0.86 / this.temperatuurVerschil;
    var oppervlakte = this.debiet / 3600 / this.watersnelheid;
    this.setDiameterFromOppervlakte(oppervlakte);
  }

  setDiameterFromOppervlakte(oppervlakte:number) {
    var d = Math.sqrt( oppervlakte * 4 / Math.PI ) * 1000;
    this.diameter = this.mogelijkeDiameters().filter(function(value){
      return value >= d;
    })[0];
    this.checkCircuitDiameters();
  }

  checkCircuitDiameters() {
    var options = this.mogelijkeDiametersMetFilter();
    for (let u of this.circuits) {
      if ( !options.includes(u.diameter) ) {
        u.diameter = options[0];
      }
      u.checkCircuitAansluitingen();
    }
  }
  
  resetOfferte() {
    this.debiet = 17.2;
    this.temperatuurVerschil = 20;
    this.vermogen = 400;
    this.watersnelheid = 0.35;
    this.diameter = 125;

    this.afstandTussenCircuits = 400;
    this.circuits = [new SecundaireCollectorCircuit(100, false)
                        , new SecundaireCollectorCircuit(100, true)
                        , new SecundaireCollectorCircuit(100, false) ];
  }

  deleteCircuit(j) {
    if (this.circuits.length > 2) {
      this.circuits.splice(j,1);
    }
  }

  addCircuit(j) {
    if (this.circuits.length < 6) {
      this.circuits.push(new SecundaireCollectorCircuit(100, false));
    }
  }
}

class SecundaireCollectorCircuit {
  diameter:number;
  aansluiting:string;

  constructor(diameter, heeftScroefdraad){
    this.diameter = diameter;
    this.checkCircuitAansluitingen();
  }

  checkCircuitAansluitingen() {
    var options = this.mogelijkeCircuitAansluitingen();
      if ( !options.includes(this.aansluiting) ) {
        var d = this.diameter;
        this.aansluiting = options.filter(function(value){
          if ( d <= 100 && value.indexOf("\"") >= 0 ) {
            return true;
          } else if ( d > 100 && value.indexOf("P") >= 0 ) {
            return true;
          }
          return false;
        })[0];
      }
    
  }

  mogelijkeCircuitAansluitingen(): string[] {
    var options = ["Lasnaad"];

    switch (this.diameter) {
      case 15:
      case 20:
      case 25:
        options.push("1\"M");
        options.push("1\"F");
        break;

      case 32:
        options.push("5/4\"M");
        options.push("5/4\"F");
        break;

      case 40:
        options.push("6/4\"M");
        options.push("6/4\"F");
        break;

      case 50:
        options.push("2\"M");
        options.push("2\"F");
        break;

      case 65:
        options.push("2 1/2\"M");
        options.push("2 1/2\"F");
        break;

      case 80:
        options.push("3\"M");
        options.push("3\"F");
        break;

      case 100:
        options.push("4\"M");
        options.push("4\"F");
        break;

      case 65:
        options.push("3\"M");
        options.push("3\"F");
        break;
    
      default:
        break;
    }

    if ( this.diameter < 200 ) {
      options.push("PN6");
      options.push("PN10/16");
    } else {
      options.push("PN10");
      options.push("PN16");
    }

    return options;
  }
}

//sortering van de circuits, moet ik me daar zorgen in maken?
//benaming van de componenten in het nederlands?
//volledige component in 1 object => is dat ok?
//waar stop ik mijn class Guid?


class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}