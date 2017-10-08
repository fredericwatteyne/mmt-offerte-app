import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferteSecundaireCollectorComponent } from './offerte-secundaire-collector.component';

describe('OfferteSecundaireCollectorComponent', () => {
  let component: OfferteSecundaireCollectorComponent;
  let fixture: ComponentFixture<OfferteSecundaireCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferteSecundaireCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferteSecundaireCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
