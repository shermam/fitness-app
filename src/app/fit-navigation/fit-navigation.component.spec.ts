import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitNavigationComponent } from './fit-navigation.component';

describe('FitNavigationComponent', () => {
  let component: FitNavigationComponent;
  let fixture: ComponentFixture<FitNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
