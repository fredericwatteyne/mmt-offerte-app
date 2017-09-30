import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaireCollectorComponent } from './primaire-collector.component';

describe('PrimaireCollectorComponent', () => {
  let component: PrimaireCollectorComponent;
  let fixture: ComponentFixture<PrimaireCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaireCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaireCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
