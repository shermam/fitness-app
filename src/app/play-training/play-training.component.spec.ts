import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTrainingComponent } from './play-training.component';

describe('PlayTrainingComponent', () => {
  let component: PlayTrainingComponent;
  let fixture: ComponentFixture<PlayTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
