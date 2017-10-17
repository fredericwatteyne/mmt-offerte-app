import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaanvragenComponent } from './contactaanvragen.component';

describe('ContactaanvragenComponent', () => {
  let component: ContactaanvragenComponent;
  let fixture: ComponentFixture<ContactaanvragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactaanvragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactaanvragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
