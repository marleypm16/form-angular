import { ComponentFixture, TestBed } from '@angular/core/testing';

import { selectPlanForm } from './selectPlanForm.component';

describe('Form2Component', () => {
  let component: selectPlanForm;
  let fixture: ComponentFixture<selectPlanForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [selectPlanForm]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(selectPlanForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
