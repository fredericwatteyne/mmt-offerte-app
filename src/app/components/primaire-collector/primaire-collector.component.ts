import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-primaire-collector',
  templateUrl: './primaire-collector.component.html',
  styleUrls: ['./primaire-collector.component.css']
})
export class PrimaireCollectorComponent implements OnInit, AfterViewInit {
  afstandTussenUitgangen:number;
  uitgangen: PrimaireCollectorUitgang[];

  @ViewChild('myCanvas') canvasRef: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.afstandTussenUitgangen = 20;

    this.uitgangen = [new PrimaireCollectorUitgang(20, false)
                        , new PrimaireCollectorUitgang(20, true)
                        , new PrimaireCollectorUitgang(8, false) ];
  }

  ngAfterViewInit() {
    this.drawPrimaireCollector();
  }


  isNieuwOfferte():Boolean {
    return true;
  }
  drawPrimaireCollector() {
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    //console.log(document.querySelectorAll("#myCanvas")[0].clientWidth);

    ctx.clearRect(0, 0, 1000, 400);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(1000, 0);
    ctx.lineTo(1000, 400);
    ctx.lineTo(0, 400);
    ctx.lineTo(0, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 60);
    ctx.lineTo(100, 320);
    ctx.stroke();

    ctx.moveTo(100, 100);
    ctx.lineTo(150 * this.uitgangen.length + 40, 100);
    ctx.stroke();

    ctx.moveTo(100, 200);
    ctx.lineTo(150 * this.uitgangen.length + 80, 200);
    ctx.stroke();

    var i = 0;
    for (let u of this.uitgangen) {

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

  deleteUitgang(j) {
    this.uitgangen.splice(j,1);
    this.drawPrimaireCollector();
  }

  addUitgang(j) {
    if (this.uitgangen.length < 6) {
      this.uitgangen.push(new PrimaireCollectorUitgang(20, false));
      this.drawPrimaireCollector();
    }
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