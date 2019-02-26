import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcallcenterComponent } from './dashboardcallcenter.component';

describe('DashboardcallcenterComponent', () => {
  let component: DashboardcallcenterComponent;
  let fixture: ComponentFixture<DashboardcallcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcallcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcallcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
