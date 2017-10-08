import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisatiesComponent } from './realisaties.component';

describe('RealisatiesComponent', () => {
  let component: RealisatiesComponent;
  let fixture: ComponentFixture<RealisatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
