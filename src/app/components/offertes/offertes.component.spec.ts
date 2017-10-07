import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertesComponent } from './offertes.component';

describe('OffertesComponent', () => {
  let component: OffertesComponent;
  let fixture: ComponentFixture<OffertesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
