import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDisplayListComponent } from './city-display-list.component';

describe('CityDisplayListComponent', () => {
  let component: CityDisplayListComponent;
  let fixture: ComponentFixture<CityDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
