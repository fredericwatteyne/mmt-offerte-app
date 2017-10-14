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
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    ctx.clearRect(0, 0, 1000, 400);

    ctx.beginPath();
    ctx.moveTo(100, 60);
    ctx.lineTo(100, 320);
    ctx.stroke();

    ctx.moveTo(100, 100);
    ctx.lineTo(150 * this.model.circuits.length + 40, 100);
    ctx.stroke();

    ctx.moveTo(100, 200);
    ctx.lineTo(150 * this.model.circuits.length + 80, 200);
    ctx.stroke();

    var i = 0;
    for (let u of this.model.circuits) {

      ctx.moveTo(150 + i * 150, 100);
      ctx.lineTo(150 + i * 150, 240);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(150 + i * 150, 100,2,0,2*Math.PI);
      ctx.fill();
      ctx.stroke();
      
      ctx.moveTo(180 + i * 150, 200);
      ctx.lineTo(180 + i * 150, 280);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(180 + i * 150, 200,2,0,2*Math.PI);
      ctx.fill();
      ctx.stroke();

      if (u.heeftScroefdraad) {
        ctx.beginPath();
        ctx.arc(150 + i * 150, 254, 8, 0, Math.PI, true);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(180 + i * 150, 294, 8, 0, Math.PI, true);
        ctx.stroke();
      }
      i++;
    }
  }

  deleteCircuit(j) {
    this.model.deleteCircuit(j);
    this.drawPrimaireCollector();
  }

  addCircuit(j) {
    this.model.addCircuit(j);
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
    this.circuits.splice(j,1);
  }

  addCircuit(j) {
    if (this.circuits.length < 6) {
      this.circuits.push(new SecundaireCollectorCircuit(100, false));
    }
  }
}

class SecundaireCollectorCircuit {
  diameter:number;
  heeftScroefdraad:Boolean;

  constructor(diameter, heeftScroefdraad){
    this.diameter = diameter;
    this.heeftScroefdraad = heeftScroefdraad;
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