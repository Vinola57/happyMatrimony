import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedComponent } from './daily-recommendation.component';

describe('InterestedComponent', () => {
  let component: InterestedComponent;
  let fixture: ComponentFixture<InterestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
