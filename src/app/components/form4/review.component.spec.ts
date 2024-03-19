import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review } from './review.component';

describe('Form4Component', () => {
  let component: Review;
  let fixture: ComponentFixture<Review>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Review]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Review);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
