import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsChildComponent } from './stats-child.component';

describe('StatsChildComponent', () => {
  let component: StatsChildComponent;
  let fixture: ComponentFixture<StatsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
