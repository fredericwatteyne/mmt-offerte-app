import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaireCollectorOfferteComponent } from './secundaire-collector-offerte.component';

describe('SecundaireCollectorOfferteComponent', () => {
  let component: SecundaireCollectorOfferteComponent;
  let fixture: ComponentFixture<SecundaireCollectorOfferteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecundaireCollectorOfferteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundaireCollectorOfferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
