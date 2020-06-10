import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationEndpointListComponent } from './observation-endpoint-list.component';

describe('ObservationEndpointListComponent', () => {
  let component: ObservationEndpointListComponent;
  let fixture: ComponentFixture<ObservationEndpointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationEndpointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationEndpointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
