import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardownComponent } from './navbardown.component';

describe('NavbardownComponent', () => {
  let component: NavbardownComponent;
  let fixture: ComponentFixture<NavbardownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbardownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
