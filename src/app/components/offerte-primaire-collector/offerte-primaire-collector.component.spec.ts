import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertePrimaireCollectorComponent } from './primaire-collector.component';

describe('OffertePrimaireCollectorComponent', () => {
  let component: OffertePrimaireCollectorComponent;
  let fixture: ComponentFixture<OffertePrimaireCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertePrimaireCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertePrimaireCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
