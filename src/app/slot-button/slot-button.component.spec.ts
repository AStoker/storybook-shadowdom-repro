import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotButtonComponent } from './slot-button.component';

describe('SlotButtonComponent', () => {
  let component: SlotButtonComponent;
  let fixture: ComponentFixture<SlotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
