import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursimComponent } from './toursim.component';

describe('ToursimComponent', () => {
  let component: ToursimComponent;
  let fixture: ComponentFixture<ToursimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
