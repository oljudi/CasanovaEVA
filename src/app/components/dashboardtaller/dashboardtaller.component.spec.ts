import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtallerComponent } from './dashboardtaller.component';

describe('DashboardtallerComponent', () => {
  let component: DashboardtallerComponent;
  let fixture: ComponentFixture<DashboardtallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardtallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardtallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
